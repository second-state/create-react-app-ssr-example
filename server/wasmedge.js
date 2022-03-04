import * as React from 'react';
import ReactDOMServer from 'react-dom/server';
import * as http from 'wasi_http';
import * as net from 'wasi_net';

import App from '../src/App.js';

async function handle_client(cs) {
	print('open:', cs.peer());
	let buffer = new http.Buffer();

	while (true) {
		try {
			let d = await cs.read();
			if (d == undefined || d.byteLength <= 0) {
				return;
			}
			buffer.append(d);
			let req = buffer.parseRequest();
			if (req instanceof http.WasiRequest) {
				handle_req(cs, req);
				break;
			}
		} catch (e) {
			print(e);
		}
	}
	print('end:', cs.peer());
}

async function handle_req(s, req) {
	print('uri:', req.uri)
	let resp = new http.WasiResponse();
	if (req.uri == '/') {
		const app = ReactDOMServer.renderToString(<App />);
		resp.headers = {
			"Content-Type": "text/html; charset=utf-8"
		}
		let r = resp.encode(app);
		s.write(r);
	}
}

async function server_start() {
	print('listen 8002...');
	try {
		let s = new net.WasiTcpServer(8002);
		for (var i = 0; ; i++) {
			let cs = await s.accept();
			handle_client(cs);
		}
	} catch (e) {
		print(e)
	}
}

server_start();
