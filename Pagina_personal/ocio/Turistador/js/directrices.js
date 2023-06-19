const crepVespertinos = {'enero' : ['20:39', '20:39', '20:39', '20:39', '20:39', '20:39', '20:39', '20:39', '20:38', '20:38', '20:38', '20:38', '20:38', '20:37', '20:37', '20:37', '20:36', '20:36', '20:35', '20:35', '20:34', '20:34', '20:33', '20:33', '20:32', '20:31', '20:31', '20:30', '20:29', '20:28', '20:28'],
'febrero' : ['20:27', '20:26', '20:25', '20:24', '20:23', '20:22', '20:21', '20:20', '20:19', '20:18', '20:17', '20:16', '20:15', '20:14', '20:13', '20:12', '20:10', '20:09', '20:08', '20:07', '20:06', '20:04', '20:03', '20:02', '20:01', '19:59', '19:58', '19:57'],
'marzo' : ['19:55', '19:54', '19:53', '19:51', '19:50', '19:49', '19:47', '19:46', '19:45', '19:43', '19:42', '19:40', '19:39', '19:38', '19:36', '19:35', '19:34', '19:32', '19:31', '19:29', '19:28', '19:27', '19:25', '19:24', '19:22', '19:21', '19:20', '19:18', '19:17', '19:15', '19:14'],
'abril' : ['19:13', '19:11', '19:10', '19:09', '19:07', '19:06', '19:05', '19:04', '19:02', '19:01', '19:00', '18:58', '18:57', '18:56', '18:55', '18:53', '18:52', '18:51', '18:50', '18:49', '18:48', '18:46', '18:45', '18:44', '18:43', '18:42', '18:41', '18:40', '18:39', '18:38'],
'mayo' : ['18:37', '18:36', '18:35', '18:34', '18:33', '18:33', '18:32', '18:31', '18:30', '18:29', '18:28', '18:28', '18:27', '18:26', '18:26', '18:25', '18:24', '18:24', '18:23', '18:23', '18:22', '18:22', '18:21', '18:21', '18:20', '18:20', '18:19', '18:19', '18:19', '18:18', '18:18'],
'junio' : ['18:18', '18:18', '18:17', '18:17', '18:17', '18:17', '18:17', '18:17', '18:17', '18:17', '18:17', '18:17', '18:17', '18:17', '18:17', '18:17', '18:17', '18:17', '18:17', '18:18', '18:18', '18:18', '18:18', '18:19', '18:19', '18:19', '18:19', '18:20', '18:20', '18:21'],
'julio' : ['18:21', '18:21', '18:22', '18:22', '18:23', '18:23', '18:24', '18:24', '18:25', '18:25', '18:26', '18:26', '18:27', '18:27', '18:28', '18:29', '18:29', '18:30', '18:30', '18:31', '18:32', '18:32', '18:33', '18:34', '18:34', '18:35', '18:35', '18:36', '18:37', '18:37', '18:38'],
'agosto' : ['18:39', '18:39', '18:40', '18:41', '18:41', '18:42', '18:43', '18:43', '18:44', '18:45', '18:46', '18:46', '18:47', '18:48', '18:48', '18:49', '18:50', '18:50', '18:51', '18:52', '18:52', '18:53', '18:54', '18:54', '18:55', '18:56', '18:56', '18:57', '18:58', '18:58', '18:59'],
'septiembre' : ['19:00', '19:00', '19:01', '19:02', '19:02', '19:03', '19:04', '19:05', '19:05', '19:06', '19:07', '19:07', '19:08', '19:09', '19:09', '19:10', '19:11', '19:12', '19:12', '19:13', '19:14', '19:14', '19:15', '19:16', '19:17', '19:17', '19:18', '19:19', '19:20', '19:20'],
'octubre' : ['19:21', '19:22', '19:23', '19:24', '19:24', '19:25', '19:26', '19:27', '19:28', '19:29', '19:29', '19:30', '19:31', '19:32', '19:33', '19:34', '19:35', '19:35', '19:36', '19:37', '19:38', '19:39', '19:40', '19:41', '19:42', '19:43', '19:44', '19:45', '19:46', '19:47', '19:48'],
'noviembre' : ['19:49', '19:50', '19:51', '19:52', '19:53', '19:54', '19:55', '19:56', '19:57', '19:58', '19:59', '20:00', '20:01', '20:02', '20:04', '20:05', '20:06', '20:07', '20:08', '20:09', '20:10', '20:11', '20:12', '20:13', '20:14', '20:15', '20:16', '20:17', '20:18', '20:19'],
'diciembre' : ['20:20', '20:21', '20:22', '20:23', '20:24', '20:24', '20:25', '20:26', '20:27', '20:28', '20:29', '20:29', '20:30', '20:31', '20:31', '20:32', '20:33', '20:33', '20:34', '20:34', '20:35', '20:35', '20:36', '20:36', '20:37', '20:37', '20:37', '20:38', '20:38', '20:38', '20:38']};


const retrasos = {'primera' : ['00:02', '01:16', '01:03', '00:21', '00:41', '00:19', '00:31', '00:17', '00:36', '01:11', '00:31', '00:36', '00:28', '00:56', '00:50', '00:02', '00:47', '00:32', '00:40', '00:24', '01:03', '00:27', '00:40', '01:09', '02:28', '00:42', '00:20', '00:58', '01:00', '01:37', '00:13', '00:52', '01:04', '01:19'], 
'segunda' : ['00:02', '01:17', '01:13', '01:02', '01:16', '01:11', '00:59', '00:31', '00:02', '00:56', '00:44', '01:00', '02:40', '00:01', '00:02', '00:26', '00:51', '00:31', '01:41', '00:29', '00:34', '01:09', '00:23', '00:43', '01:04', '00:20', '01:02', '00:55', '00:13', '00:32', '00:23'], 
'tercera' : ['00:02', '00:48', '00:46', '00:44', '00:32', '01:28', '00:33', '01:11', '00:46', '00:36', '00:28', '00:59', '00:13', '00:29', '00:18', '00:16', '03:21', '00:02', '00:59', '00:31', '00:43', '00:50', '00:25', '01:04', '00:55', '00:32', '00:43', '01:01', '00:50', '00:13', '00:32', '00:47', '00:58'], 
'cuarta' : ['00:02', '01:11', '00:46', '00:28', '00:56', '01:09', '00:44', '00:27', '00:59', '01:16', '00:50', '00:31', '00:51', '00:56', '00:16', '00:02', '01:23', '00:02', '00:59', '00:31', '00:50', '00:25', '01:09', '00:45', '00:40', '00:32', '00:40', '00:24', '00:42', '00:20', '01:00', '00:49', '00:13', '00:24', '00:32', '01:51'], 
'quinta' : ['00:02', '01:17', '00:53', '00:58', '00:12', '01:16', '00:42', '00:59', '00:44', '00:56', '00:50', '00:20', '00:16', '01:20', '00:02', '00:52', '00:35', '00:25', '00:45', '00:31', '00:50', '00:36', '00:41', '00:37', '00:32', '00:40', '01:09', '00:44', '00:20', '00:51', '01:00', '00:49', '00:13', '01:04', '00:32', '01:19'], 
'sexta' : ['00:02', '00:35', '00:53', '01:09', '00:36', '01:11', '01:16', '00:44', '00:31', '00:50', '00:28', '00:45', '00:02', '00:56', '00:50', '00:34', '00:10', '00:12', '01:09', '00:41', '00:37', '00:32', '00:40', '00:54', '00:52', '00:24', '00:42', '01:00', '00:49', '00:58', '01:01', '00:30', '00:48', '00:33', '01:19', '00:26']};

const listas = {
    'primera' : {'Campana Lunar' : 'https://www.youtube.com/watch?v=iU2wPRJ8RUE', 'Delhi, India' : 'https://www.youtube.com/watch?v=g-c3K8plBxo', 'Estambúl, Turquía' : 'https://www.youtube.com/watch?v=bNEGEb_YtmU', 'Especial caminando por Obelisco, Buenos Aires, Argentina' : 'https://www.youtube.com/watch?v=R3QQr6qVOn0', 'Especial caminando por Corrientes, Buenos Aires, Argentina' : 'https://www.youtube.com/watch?v=Yy6pUS3Xtl8', 'Especial caminando por Miramar, Prov. Buenos Aires, Argentina' : 'https://www.youtube.com/watch?v=ufna7wzzhQI', 'Especial caminando por Puerto Madero, Buenos Aires, Argentina' : 'https://www.youtube.com/watch?v=xWKBuDOp4uw', 'Especial caminando por Plaza Serrano, Buenos Aires, Argentina' : 'https://www.youtube.com/watch?v=3y_LBFJfu6U', 'Aeropuerto de Rio de Janeiro, Brasil' : 'https://www.youtube.com/watch?v=KKeVvM_VtwM', 'Distrito rascacielos, Rio de Janeiro, Brasil' : 'https://www.youtube.com/watch?v=fG_idt30MZA', 'Buenos Aires, Argentina (Parte 1)' : 'https://www.youtube.com/watch?v=5yEbWIeSowY', 'San Francisco, USA' : 'https://www.youtube.com/watch?v=VxzwdD2zMrk', 'Buenos Aires, Argentina (Parte 2)' : 'https://www.youtube.com/watch?v=8OlboCRLdv0&list=PLOJvby8Q_tfGp8QXNce2UAKUuS5DBjSbR&index=13', 'Buenos Aires, Argentina (Parte 3)' : 'https://www.youtube.com/watch?v=8OlboCRLdv0', 'Los Angeles, California, USA' : 'https://www.youtube.com/watch?v=8ziL3gjSA5Y', 'Hollywood, California, USA' : 'https://www.youtube.com/watch?v=FOlPJiqGwHk', 'Campana Solar' : 'https://www.youtube.com/watch?v=iU2wPRJ8RUE', 'Dubai, Emiratos Árabes Unidos' : 'https://www.youtube.com/watch?v=ta6bRf4MqNo', 'Davos, Suiza' : 'https://www.youtube.com/watch?v=QCoGA2DYLjU', 'Sydney, Australia' : 'https://www.youtube.com/watch?v=jTyfIV2wres&pp=ygU2RHJpdmluZyBJbiBUaGUgQ2l0eSBDZW50cmUgfCBTeWRuZXkgQXVzdHJhbGlhIHwgNEsgVUhE', 'Venecia a Murano, Italia' : 'https://i.ytimg.com/vi/ZU0xoRixntA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAytaTPeCMUJCrRIrOLwcRrzhzx-A', 'Especial caminando por Tokyo, Japón' : 'https://www.youtube.com/watch?v=Et7O5-CzJZg&pp=ygVaV2Fsa2luZyBpbiB0aGUgUmFpbiBUb2t5bywgSmFwYW4gKFJlbGF4aW5nIEJpbmF1cmFsIFRodW5kZXJzdG9ybSBTb3VuZHMgZm9yIFNsZWVwKSA0ayBBU01S', 'Especial caminando por Buenos Aires, Argentina' : 'https://www.youtube.com/watch?v=SaDjNMF7hzo&pp=ygU-QnVlbm9zIEFpcmVzLCBBcmdlbnRpbmEg4oCUIENpdHkgV2Fsa2luZyBUb3VyIOOAkDRL44CR8J-HpvCfh7c%3D', 'Especial caminando por Miramar, Prov. Buenos Aires, Argentina (Parte 2)' : 'https://www.youtube.com/watch?v=_687S6_aaLU&pp=ygUyQ2FtaW5hbmRvIHBvciBNSVJBTUFSIChXYWxraW5nIFRvdXIpIHwgVmVyYW5vIDIwMjI%3D', 'Lima, Perú' : 'https://www.youtube.com/watch?v=dk-NdzCrxvw', 'Sorrento, Nápoles, Italia' : 'https://www.youtube.com/watch?v=ugK4uFs_E1g&pp=ygVbU29ycmVudG8gNEsgV2Fsa2luZyBUb3VyIChJdGFseSkgLSBUb3VyIHdpdGggQ2FwdGlvbnMgJiBJbW1lcnNpdmUgU291bmQgWzRLIFVsdHJhIEhELzYwZnBzXQ%3D%3D', 'Berlín, Alemania' : 'https://www.youtube.com/watch?v=lBlKR2ek0w4&pp=ygVqQmVybGluIC0gR2VybWFueSDwn4ep8J-HqiBEcml2aW5nIFRvdXIgWzRLXSBBbGV4YW5kZXJwbGF0eiwgUG90c2RhbWVyIFBsYXR6LCBCcmFuZGVuYnVyZyBHYXRlLCBXZXN0LUJlcmxpbg%3D%3D', 'Central Park, New York, USA' : 'https://www.youtube.com/watch?v=SsFr0PMNGCA&pp=ygVSRHJpdmluZyBEb3dudG93biBDZW50cmFsIFBhcmsgNEsgLSBOZXcgWW9yayBDaXR5LCBUaGUgTW9zdCBGYW1vdXMgUGFyayBpbiBOZXcgWW9yaw%3D%3D', 'Amsterdam, Países Bajos' : 'https://www.youtube.com/watch?v=Ve4DvQNnDDQ', 'Especial caminando por New York, USA' : 'https://www.youtube.com/watch?v=eZe4Q_58UTU&pp=ygVNV2Fsa2luZyBpbiB0aGUgUmFpbiBpbiBNYW5oYXR0YW4sIE5ZQyAoQmluYXVyYWwgQ2l0eSBTb3VuZHMpIDRrIFJhaW4gQW1iaWVuY2U%3D', 'Cairo, Egipto' : 'https://www.youtube.com/watch?v=Esyp2P0uJu4', 'Petra, Jordania' : 'https://www.youtube.com/watch?v=wLeAiJJXxWI&pp=ygUeV2Fsa2luZyBpbiBQZXRyYSAtIEpvcmRhbiBbNEtd', 'Malibú, Los Angeles, USA' : 'https://www.youtube.com/watch?v=avTBYK-snOU&pp=ygUYTWFsaWJ1IDRLIC0gU2NlbmljIERyaXZl', 'San Francisco, California, USA' : 'https://www.youtube.com/watch?v=Uw2d52XQ1L8&pp=ygUpRHJpdmluZyBEb3dudG93biAtIFNhbiBGcmFuY2lzY28gNEsgLSBVU0E%3D', 'Dubai, Emiratos Árabes Unidos' : 'https://www.youtube.com/watch?v=TE2tfavIo3E&pp=ygUvRHViYWkgNEsgLSBEcml2aW5nIERvd250b3duIC0gU2t5c2NyYXBlciBTdW5zZXQ%3D'},
    'segunda' : {'Campana Lunar' : 'https://www.youtube.com/watch?v=iU2wPRJ8RUE', 'Dallas, Texas, USA' : 'https://www.youtube.com/watch?v=mjUWMr8HtYY&pp=ygUwRGFsbGFzIDRLIC0gTmlnaHQgRHJpdmUgLSBEcml2aW5nIERvd250b3duIC0gVVNB', 'Toronto, Canadá' : 'https://www.youtube.com/watch?v=Zbm0Z6nw5sE&pp=ygUsVG9yb250byA0SyAtIFN1bnNldCBEcml2ZSAtIERyaXZpbmcgRG93bnRvd24%3D', 'Boston, Massachusetts, USA' : 'https://www.youtube.com/watch?v=EQ9Rm43jGpw&pp=ygUdQm9zdG9uIDRLIC0gTmlnaHQgRHJpdmUgLSBVU0E%3D', 'New York, USA' : 'https://www.youtube.com/watch?v=RTLwaQFtXbE&pp=ygU3TmV3IFlvcmsgQ2l0eSA0SyAtIE5pZ2h0IERyaXZlIC0gRHJpdmluZyBEb3dudG93biAtIFVTQQ%3D%3D', 'San Francisco, California, USA' : 'https://www.youtube.com/watch?v=hBUGCJ3Dm_8&pp=ygUhU2FuIEZyYW5jaXNjbyBEcml2ZSBhdCBOaWdodCAtIDRL', 'San Diego, California, USA' : 'https://www.youtube.com/watch?v=1w7j8ooQcD8&pp=ygUbU2FuIERpZWdvIE5pZ2h0IERyaXZlIGluIDRL', 'Buenos Aires, Argentina': 'https://www.youtube.com/watch?v=5yEbWIeSowY&pp=ygU5TGF0ZSBOaWdodCBEcml2ZSAtIEJ1ZW5vcyBBaXJlcyBBcmdlbnRpbmEgMjAyMiA0SyBVbHRyYUhE', 'Los Angeles, California, USA' : 'https://www.youtube.com/watch?v=8ziL3gjSA5Y', 'Sao Paulo, Brasil' : 'https://www.youtube.com/watch?v=WcjGyIjHLDA&pp=ygUaU2FvIFBhdWxvIDRLIC0gTmlnaHQgRHJpdmU%3D', 'Ibiza, España' : 'https://www.youtube.com/watch?v=XQNwk_ajmW4&pp=ygUvSWJpemEgU3BhaW4gNEsgLSBEcml2aW5nIERvd250b3duIC0gTmlnaHQgRHJpdmU%3D', 'Florencia a Roma, Italia' : 'https://www.youtube.com/watch?v=Z1_xHH6Emq0&pp=ygVVIEFTTVIgSGlnaHdheSBkcml2aW5nIGluIHRoZSByYWluLCBJdGFseSBbRmxvcmVuY2UtUm9tZV0gRGVjZW1iZXIgMjAyMCB8IDIwOjAwIHwg4piUIA%3D%3D', 'New Orleans, Louisana, USA' : 'https://www.youtube.com/watch?v=e7ro89IVPX4&pp=ygVFRHJpdmluZyBJbnRvIERvd250b3duIE5ldyBPcmxlYW5zIGF0IFN1bnNldCDigJMgTmV3IE9ybGVhbnMgTG91aXNpYW5h', 'Campana Solar' : 'https://www.youtube.com/watch?v=iU2wPRJ8RUE', 'Las Vegas, Nevada, USA' : 'https://www.youtube.com/watch?v=PdMrwVxkt5I&pp=ygU1TGFzIFZlZ2FzIDRLIC0gQW1lcmljYSdzIFBsYXlncm91bmQgLSBTa3lsaW5lIFN1bnJpc2U%3D', 'Seoul, Corea del Sur' : 'https://www.youtube.com/watch?v=DlLqFGoNFZ8&pp=ygU2U2VvdWwgNEsgLSBTb3V0aCBLb3JlYW4gV2FsbCBTdHJlZXQgLSBEcml2aW5nIERvd250b3du', 'Playa Copacabana, Rio de Janeiro, Brasil' : 'https://www.youtube.com/watch?v=_hWCN1yV9TY&pp=ygUpUmlvIDRLIC0gQ29wYWNhYmFuYSBCZWFjaCAtIE1vcm5pbmcgRHJpdmU%3D', 'Miami, Orlando, USA' : 'https://www.youtube.com/watch?v=xj7abSp07w0&pp=ygUkTWlhbWkgNEsgLSBHb2xkIENvYXN0IC0gU2NlbmljIERyaXZl', 'San Diego, California, USA (Parte 2)' : 'https://www.youtube.com/watch?v=B_pF3hO1qXw&pp=ygUsU2FuIERpZWdvIDRLIC0gU2NlbmljIERyaXZlIC0gQ2FsaWZvcm5pYSBVU0E%3D', 'Parque Nacional Wicklow Mountains, Irlanda' : 'https://www.youtube.com/watch?v=LDyqhnCamok&pp=ygU-V2lja2xvdyBNb3VudGFpbnMgTmF0aW9uYWwgUGFyayA0SyAtIFNjZW5pYyBEcml2ZSAtIEhlYXZ5IFJhaW4%3D', 'Mumbai Sur, India' : 'https://www.youtube.com/watch?v=MAj6y23vNuU&pp=ygUqU291dGggTXVtYmFpIDRLIC0gRHJpdmluZyBEb3dudG93biAtIEluZGlh', 'Acantilados Oceánicos de Sudáfrica' : 'https://www.youtube.com/watch?v=pYHUuK12-J4&pp=ygUtU291dGggQWZyaWNhIDRLIC0gT2NlYW4gQ2xpZmZzIC0gU2NlbmljIERyaXZl', 'Liverpool, Inglaterra' : 'https://www.youtube.com/watch?v=M_q2cBP0xus&pp=ygUwTGl2ZXJwb29sIDRLIC0gRHJpdmluZyBEb3dudG93biAtIEVuZ2xhbmQgU29jY2Vy', 'Los Angeles, California, USA' : 'https://www.youtube.com/watch?v=zfblxgasy-0&pp=ygU7TG9zIEFuZ2VsZXMgNEsgLSBTa3lzY3JhcGVyIE1ldHJvcG9saXMgLSBXaWxzaGlyZSBCb3VsZXZhcmQ%3D', 'Central Park, New York, USA' : 'https://www.youtube.com/watch?v=SsFr0PMNGCA&pp=ygVSRHJpdmluZyBEb3dudG93biBDZW50cmFsIFBhcmsgNEsgLSBOZXcgWW9yayBDaXR5LCBUaGUgTW9zdCBGYW1vdXMgUGFyayBpbiBOZXcgWW9yaw%3D%3D', 'Lago Montañoso de Italia' : 'https://www.youtube.com/watch?v=9IoroeGhXtg&pp=ygUnSXRhbHkgNEsgLSBNb3VudGFpbiBMYWtlIC0gU2NlbmljIERyaXZl', 'Parque Nacional Zion, Utah, USA' : 'https://www.youtube.com/watch?v=ydvsyAZbuSQ&pp=ygUvWmlvbiBOYXRpb25hbCBQYXJrIDRLIC0gU2NlbmljIERyaXZlIC0gVXRhaCBVU0E%3D', 'Sillicon Valley, California, USA' : 'https://www.youtube.com/watch?v=bNmTDiXMYmg&pp=ygU1RHJpdmluZyBEb3dudG93biAtIFNpbGljb24gVmFsbGV5IDRLIC0gQ2FsaWZvcm5pYSBVU0E%3D', 'Oakland, California, USA' : 'https://www.youtube.com/watch?v=46OWnFgBB5k&pp=ygU644CQNEs2MOOAkSBEcml2aW5nIC0gT2FrbGFuZDogRG93bnRvd24gT2FrbGFuZCwgQ2FsaWZvcm5pYQ%3D%3D', 'Parque Nacional Yosemite, California, USA' : 'https://www.youtube.com/watch?v=eLt05BU8RgE&pp=ygU4WW9zZW1pdGUgTmF0aW9uYWwgUGFyayA0SyAtIFNjZW5pYyBEcml2ZSAtIE1vdW50YWluIFBhc3M%3D'},
    'tercera' : {'Campana Lunar' : 'https://www.youtube.com/watch?v=iU2wPRJ8RUE', 'Zurich, Suiza' : 'https://www.youtube.com/watch?v=WVggB714jqU&pp=ygUkWnVyaWNoIFN3aXR6ZXJsYW5kIDRLIC0gU3Vuc2V0IERyaXZl', 'Tampa, Florida, USA' : 'https://www.youtube.com/watch?v=26_9x6sEj2Y&pp=ygUWVGFtcGEgNEsgLSBOaWdodCBEcml2ZQ%3D%3D', 'Milan, Louisana, USA' : 'https://www.youtube.com/watch?v=fNCesoSwj6A&pp=ygUWTWlsYW4gNEsgLSBOaWdodCBEcml2ZQ%3D%3D', 'Roma, Italia' : 'https://www.youtube.com/watch?v=ebxiasWyeBw&pp=ygUoUm9tZSA0SyAtIERyaXZpbmcgRG93bnRvd24gLSBOaWdodCBEcml2ZQ%3D%3D', 'Dubai, Emiratos Árabes Unidos' : 'https://www.youtube.com/watch?v=gAejektGusM&pp=ygUqRGVzZXJ0IE1ldHJvcG9saXMgLSBEdWJhaSA0SyAtIE5pZ2h0IERyaXZl', 'Mónaco, Francia' : 'https://www.youtube.com/watch?v=VWM02zJLYvY&pp=ygU6TW9uYWNvIDRLIC0gTmlnaHQgRHJpdmUgLSBFdXJvcGUncyBCaWxsaW9uYWlyZSBSZXNvcnQgQ2l0eQ%3D%3D', 'San Francisco, California, USA' : 'https://www.youtube.com/watch?v=hBUGCJ3Dm_8&pp=ygUhU2FuIEZyYW5jaXNjbyBEcml2ZSBhdCBOaWdodCAtIDRL', 'Dublin, Irlanda' : 'https://www.youtube.com/watch?v=V6tgumeU284&pp=ygUhRHVibGluIDRLIC0gTmlnaHQgRHJpdmUgLSBJcmVsYW5k', 'San Francisco, California, USA (Parte 2)' : 'https://www.youtube.com/watch?v=VxzwdD2zMrk&pp=ygUjUE9WIFNhbiBGcmFuY2lzY28gTmlnaHQgRHJpdmUgaW4gNEs%3D', 'Tokio, Japón' : 'https://www.youtube.com/watch?v=DnDh8ewZdT4&pp=ygUpVG9reW8gNEsgLSBNZXRybyBFeHByZXNzd2F5IC0gTmlnaHQgRHJpdmU%3D', 'Centro de Madrid, España' : 'https://www.youtube.com/watch?v=OGfv0ptgag8&pp=ygU3Q09ORFVDSUVORE8gcG9yIE1BRFJJRCBkZSBOT0NIRSwgWk9OQSBDRU5UUk8gSSA0SyA2MGZwcw%3D%3D', 'New Orleans, Louisana, USA' : 'https://www.youtube.com/watch?v=N4X01bpNgEI&pp=ygUrTmV3IE9ybGVhbnMsIExBIC0gRHJpdmluZyBEb3dudG93biBOaWdodCA0Sw%3D%3D', 'New Orleans, Louisana, USA (Parte 2)' : 'https://www.youtube.com/watch?v=IaGRtICeiG0&pp=ygUhTmV3IE9ybGVhbnMgRHJpdmluZyBUb3VyIEF0IE5pZ2h0', 'New Orleans, Louisana, USA (Parte 3)' : 'https://www.youtube.com/watch?v=GF7e-NFR5wU&pp=ygU8SS0xMCBFYXN0IC0gTmV3IE9ybGVhbnMgLSBMb3Vpc2lhbmEgLSA0SyBOaWdodCBIaWdod2F5IERyaXZl', 'Washington DC, Virginia, USA' : 'https://www.youtube.com/watch?v=-E8yftfCPp0&pp=ygVKV2FzaGluZ3RvbiBELkMgYXQgTmlnaHQgOiBKdXN0IGJlZm9yZSB0aGUgQ292aWQtMTkgUGFuZGVtaWMsIEZlYnJ1YXJ5IDIwMjA%3D', 'Daegu a Seoul, Corea del Sur' : 'https://www.youtube.com/watch?v=Vcg7sLDTICk&pp=ygVYQVNNUiBIaWdod2F5IERyaXZpbmcgaW4gdGhlIFJhaW4gYXQgTmlnaHQgKE5vIFRhbGtpbmcsIE5vIE11c2ljKSAtIERhZWd1IHRvIFNlb3VsLCBLb3JlYQ%3D%3D', 'Campana Solar' : 'https://www.youtube.com/watch?v=iU2wPRJ8RUE', 'Roma, Italia' : 'https://www.youtube.com/watch?v=ytiM1nMv_xU&pp=ygUqUm9tZSA0SyAtIE1vcm5pbmcgRHJpdmUgLSBEcml2aW5nIERvd250b3du', 'Playa Copacabana, Rio de Janeiro, Brasil' : 'https://www.youtube.com/watch?v=_hWCN1yV9TY&pp=ygUpUmlvIDRLIC0gQ29wYWNhYmFuYSBCZWFjaCAtIE1vcm5pbmcgRHJpdmU%3D', 'Shangai, China' : 'https://www.youtube.com/watch?v=5ycphuqhqE8', 'Buenos Aires, Argentina' : 'https://www.youtube.com/watch?v=-TPJot7-HTs&pp=ygVBIDA6MDEgLyA0OTowOCBCdWVub3MgQWlyZXMgNEsgLSBEcml2aW5nIERvd250b3duIC0gTW9ybmluZyBEcml2ZSA%3D', 'Tokio, Japón (Parte 2)' : 'https://www.youtube.com/watch?v=B8Yyf6WKgaM&pp=ygVJVG9reW8gNEsgLSBTa3lsaW5lIEV4cHJlc3N3YXkgU3VucmlzZSAtIFJhaW5ib3cgQnJpZGdlIC0gRHJpdmluZyBEb3dudG93bg%3D%3D', 'Desierto nevado de Utah, USA' : 'https://www.youtube.com/watch?v=BlMPjhL4jqg&pp=ygUqVXRhaCA0SyAtIERlc2VydCBTbm93IC0gU2NlbmljIERyaXZlIC0gVVNB', 'Mumbai, India' : 'https://www.youtube.com/watch?v=zZrOxhH1u4k&pp=ygU0SW5kaWEncyBOZXcgWW9yayBDaXR5IC0gTXVtYmFpIDRLIC0gRHJpdmluZyBEb3dudG93bg%3D%3D', 'Mónaco, Francia (Parte 2)' : 'https://www.youtube.com/watch?v=ij6xccYYIuE&pp=ygUzTW9uYWNvIDRLIC0gQmlsbGlvbmFpcmVzJyBQbGF5Z3JvdW5kIC0gU3Vuc2V0IERyaXZl', 'Acantilados Narrow, Irlanda del Norte' : 'https://www.youtube.com/watch?v=zS1atkG3glE&pp=ygU1Tm9ydGhlcm4gSXJlbGFuZCA0SyAtIFNjZW5pYyBEcml2ZSAtIE5hcnJvdyBDbGlmZnNpZGU%3D', 'Ruta costera, Ciudad del Cabo, Sudáfrica' : 'https://www.youtube.com/watch?v=Fvt6rD9tt1c&pp=ygVGQ2FwZSBUb3duIDRLNjBGUFMgSERSIC0gQWZyaWNhJ3MgQXRsYW50aWMgQ29hc3QgSGlnaHdheSAtIFNjZW5pYyBEcml2ZQ%3D%3D', 'Vienna, Austria' : 'https://www.youtube.com/watch?v=TC64wRJt3JA&pp=ygUuVmllbm5hIDRLIC0gQXVzdHJpYSBDYXBpdGFsIC0gRHJpdmluZyBEb3dudG93bg%3D%3D', 'Sillicon Valley, California, USA' : 'https://www.youtube.com/watch?v=bNmTDiXMYmg&pp=ygU1RHJpdmluZyBEb3dudG93biAtIFNpbGljb24gVmFsbGV5IDRLIC0gQ2FsaWZvcm5pYSBVU0E%3D', 'Oakland, California, USA' : 'https://www.youtube.com/watch?v=46OWnFgBB5k&pp=ygU644CQNEs2MOOAkSBEcml2aW5nIC0gT2FrbGFuZDogRG93bnRvd24gT2FrbGFuZCwgQ2FsaWZvcm5pYQ%3D%3D', 'Time Square Avenue, New York, USA' : 'https://www.youtube.com/watch?v=QWfaTD0FM1g&pp=ygUyVGltZXMgU3F1YXJlIC0gTmV3IFlvcmsgQ2l0eSA0SyAtIERyaXZpbmcgRG93bnRvd24%3D', 'New Orleans, Louisana, USA (Parte 4)' : 'https://www.youtube.com/watch?v=GZUEaZHd_uI&pp=ygUwTmV3IE9ybGVhbnMgNEsgLSBTdW5zZXQgRHJpdmUgLSBEcml2aW5nIERvd250b3du'},
    'cuarta' : {'Campana Lunar' : 'https://www.youtube.com/watch?v=iU2wPRJ8RUE', 'Barcelona, España' : 'https://www.youtube.com/watch?v=jDvJoOgH3Zk&pp=ygUtQmFyY2Vsb25hIDRLIC0gTmlnaHQgRHJpdmUgLSBEcml2aW5nIERvd250b3du', 'Santiago, Chile' : 'https://www.youtube.com/watch?v=g63DvTXrk_E&pp=ygUiU2FudGlhZ28gNEsgLSBTdW5zZXQgRHJpdmUgLSBDaGlsZQ%3D%3D', 'Agujero Jackson, Wyoming, USA' : 'https://www.youtube.com/watch?v=xBWeFV9wAK0&pp=ygVQIDA6MDAgLyAyNzoyMSBKYWNrc29uIEhvbGUgNEsgLSBXeW9taW5nJ3MgQmlsbGlvbmFpcmUgV2lsZGVybmVzcyAtIFNjZW5pYyBEcml2ZSA%3D', 'Orlando, Florida, USA' : 'https://www.youtube.com/watch?v=5vUF7hbhiAs&pp=ygUYT3JsYW5kbyA0SyAtIE5pZ2h0IERyaXZl', 'Miami, Orlando, USA' : 'https://www.youtube.com/watch?v=Cod_ggrs69U&pp=ygUWTWlhbWkgNEsgLSBOaWdodCBEcml2ZQ%3D%3D', 'Costanera Estambúl, Turquía' : 'https://www.youtube.com/watch?v=aTsG9KK_Mkk&pp=ygUoSXN0YW5idWwgVHVya2V5IDRLIC0gQ29hc3RhbCBOaWdodCBEcml2ZQ%3D%3D', 'Brooklyn, New York, USA' : 'https://www.youtube.com/watch?v=yhCAWZlv_Sc&pp=ygUZQnJvb2tseW4gNEsgLSBOaWdodCBEcml2ZQ%3D%3D', 'San Diego, California, USA' : 'https://www.youtube.com/watch?v=1w7j8ooQcD8&pp=ygUbU2FuIERpZWdvIE5pZ2h0IERyaXZlIGluIDRL', 'New York, USA' : 'https://www.youtube.com/watch?v=RTLwaQFtXbE&pp=ygU3TmV3IFlvcmsgQ2l0eSA0SyAtIE5pZ2h0IERyaXZlIC0gRHJpdmluZyBEb3dudG93biAtIFVTQQ%3D%3D', 'Madrid, España' : 'https://www.youtube.com/watch?v=6CadnBQGLdE', 'Buenos Aires, Argentina' : 'https://www.youtube.com/watch?v=5yEbWIeSowY', 'Hong Kong, China' : 'https://www.youtube.com/watch?v=XaR6qEt-BIY&pp=ygUtSG9uZyBLb25nIDRLIC0gTmlnaHQgRHJpdmUgLSBEcml2aW5nIERvd250b3du', 'Los Angeles, California, USA' : 'https://www.youtube.com/watch?v=8ziL3gjSA5Y', 'Washington DC, Virginia, USA' : 'https://www.youtube.com/watch?v=-E8yftfCPp0&pp=ygVKV2FzaGluZ3RvbiBELkMgYXQgTmlnaHQgOiBKdXN0IGJlZm9yZSB0aGUgQ292aWQtMTkgUGFuZGVtaWMsIEZlYnJ1YXJ5IDIwMjA%3D', 'Centro Buenos Aires, Argentina' : 'https://www.youtube.com/watch?v=75X9vSFCh14&pp=ygUwQnVlbm9zIEFpcmVzIDRLIC0gTmlnaHQgRHJpdmUgLSBEcml2aW5nIERvd250b3du', 'Campana Solar' : 'https://www.youtube.com/watch?v=iU2wPRJ8RUE', 'Roma, Italia' : 'https://www.youtube.com/watch?v=ytiM1nMv_xU&pp=ygUqUm9tZSA0SyAtIE1vcm5pbmcgRHJpdmUgLSBEcml2aW5nIERvd250b3du', 'Playa Copacabana, Rio de Janeiro, Brasil' : 'https://www.youtube.com/watch?v=_hWCN1yV9TY&pp=ygUpUmlvIDRLIC0gQ29wYWNhYmFuYSBCZWFjaCAtIE1vcm5pbmcgRHJpdmU%3D', 'Buenos Aires, Argentina (Parte 2)' : 'https://www.youtube.com/watch?v=-TPJot7-HTs&pp=ygUyQnVlbm9zIEFpcmVzIDRLIC0gRHJpdmluZyBEb3dudG93biAtIE1vcm5pbmcgRHJpdmU%3D', 'Tokio, Japón' : 'https://www.youtube.com/watch?v=B8Yyf6WKgaM&pp=ygVJVG9reW8gNEsgLSBTa3lsaW5lIEV4cHJlc3N3YXkgU3VucmlzZSAtIFJhaW5ib3cgQnJpZGdlIC0gRHJpdmluZyBEb3dudG93bg%3D%3D', 'Centro de Madrid, España' : 'https://www.youtube.com/watch?v=C911U_Fo-QU&pp=ygUkTWFkcmlkIDRLIC0gRHJpdmluZyBEb3dudG93biAtIFNwYWlu', 'Centro del bajo Manhattan, New York, USA' : 'https://www.youtube.com/watch?v=rL2m5ua1Oc4&pp=ygU7TG93ZXIgTWFuaGF0dGFuIERyaXZlIC0gRHJpdmluZyBEb3dudG93biAtIE5ldyBZb3JrIENpdHkgNEs%3D', 'Springfield, Illinois, USA' : 'https://www.youtube.com/watch?v=t17JhEJ_P5w&pp=ygU5RHJpdmluZyBBcm91bmQgRG93bnRvd24gU3ByaW5nZmllbGQsIElsbGlub2lzIGluIDRrIFZpZGVv', 'Paìs de los incendios forestales, California, USA' : 'https://www.youtube.com/watch?v=DrWNlt3oJwc&pp=ygUmQ2FsaWZvcm5pYSA0SyAtIFdpbGRmaXJlIENvdW50cnkgRHJpdmU%3D', 'Sydney, Australia' : 'https://www.youtube.com/watch?v=jTyfIV2wres&pp=ygU2RHJpdmluZyBJbiBUaGUgQ2l0eSBDZW50cmUgfCBTeWRuZXkgQXVzdHJhbGlhIHwgNEsgVUhE', 'Venecia a Murano, Italia' : 'https://i.ytimg.com/vi/ZU0xoRixntA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAytaTPeCMUJCrRIrOLwcRrzhzx-A', 'Berlín, Alemania' : 'https://www.youtube.com/watch?v=lBlKR2ek0w4&pp=ygVqQmVybGluIC0gR2VybWFueSDwn4ep8J-HqiBEcml2aW5nIFRvdXIgWzRLXSBBbGV4YW5kZXJwbGF0eiwgUG90c2RhbWVyIFBsYXR6LCBCcmFuZGVuYnVyZyBHYXRlLCBXZXN0LUJlcmxpbg%3D%3D', 'Central Park, New York, USA' : 'https://www.youtube.com/watch?v=SsFr0PMNGCA&pp=ygVSRHJpdmluZyBEb3dudG93biBDZW50cmFsIFBhcmsgNEsgLSBOZXcgWW9yayBDaXR5LCBUaGUgTW9zdCBGYW1vdXMgUGFyayBpbiBOZXcgWW9yaw%3D%3D', 'Centro de París, Francia' : 'https://www.youtube.com/watch?v=lN43inpI2lk&pp=ygU4RHJpdmluZyBpbnRvIENlbnRyYWwgUGFyaXMgLSBEcml2aW5nIERvd250b3duIC0gUGFyaXMgNEs%3D', 'Hong Kong, China' : 'https://www.youtube.com/watch?v=i_gtzcoxpjg&pp=ygVnSG9uZyBLb25nIDRLIC0gQWZ0ZXJub29uIERyaXZlIC0gVHNpbSBTaGEgVHN1aSB8IOais-Wjq-W3tOWIqemBkyDlu6PmnbHpgZMg5Yqg5ou_5YiG6YGTIOWKoOmAo-WogeiAgemBkw%3D%3D', 'Sillicon Valley, California, USA' : 'https://www.youtube.com/watch?v=bNmTDiXMYmg&pp=ygU1RHJpdmluZyBEb3dudG93biAtIFNpbGljb24gVmFsbGV5IDRLIC0gQ2FsaWZvcm5pYSBVU0E%3D', 'San Jose, California, USA' : 'https://www.youtube.com/watch?v=_i4qgq2rzRs&pp=ygU5RHJpdmluZyBpbiBTYW4gSm9zZSA0SyAtIFNpbGljb24gVmFsbGV5IC0gQ2FsaWZvcm5pYSwgVVNB', 'Oakland, California, USA' : 'https://www.youtube.com/watch?v=46OWnFgBB5k&pp=ygU644CQNEs2MOOAkSBEcml2aW5nIC0gT2FrbGFuZDogRG93bnRvd24gT2FrbGFuZCwgQ2FsaWZvcm5pYQ%3D%3D', 'Centro y Costanera Buenos Aires, Argentina' : 'https://www.youtube.com/watch?v=ihIPlxiyOeY&pp=ygUeQnVlbm9zIEFpcmVzIDIwMjEgLSBEcml2aW5nIDRL'},
    'quinta' : {'Campana Lunar' : 'https://www.youtube.com/watch?v=iU2wPRJ8RUE', 'Dallas, Texas, USA' : 'https://www.youtube.com/watch?v=mjUWMr8HtYY&pp=ygUwRGFsbGFzIDRLIC0gTmlnaHQgRHJpdmUgLSBEcml2aW5nIERvd250b3duIC0gVVNB', 'Chicago, Illinois, USA' : 'https://www.youtube.com/watch?v=9Prtp_eNUiI&pp=ygUrQ2hpY2FnbyA0SyAtIE5pZ2h0IERyaXZlIC0gRHJpdmluZyBEb3dudG93bg%3D%3D', 'Centro de Singapur' : 'https://www.youtube.com/watch?v=WHX2yx1FD-w&pp=ygUtU2luZ2Fwb3JlIDRLIC0gTmlnaHQgRHJpdmUgLSBEcml2aW5nIERvd250b3du', 'Time Square Avenue, New York, USA' : 'https://www.youtube.com/watch?v=boFg0hMMreQ&pp=ygVZQVIgQWNjZWRlciAwOjAxIC8gMTE6MjkgTmV3IFlvcmsgQ2l0eSA0SyAtIE5pZ2h0IERyaXZlIC0gVGltZXMgU3F1YXJlIC0gRHJpdmluZyBEb3dudG93biA%3D', 'Las Vegas, Nevada, USA' : 'https://www.youtube.com/watch?v=HZaLvgP-R8E&pp=ygUdTGFzIFZlZ2FzIDRLIC0gTWlkbmlnaHQgRHJpdmU%3D', 'Philadelphia, Pensilvania, USA' : 'https://www.youtube.com/watch?v=BBmRgmGNf7A&pp=ygUkUGhpbGFkZWxwaGlhIDRLIC0gV2ludGVyIE5pZ2h0IERyaXZl', 'San Diego, California, USA' : 'https://www.youtube.com/watch?v=1w7j8ooQcD8&pp=ygUbU2FuIERpZWdvIE5pZ2h0IERyaXZlIGluIDRL', 'Milan, Louisana, USA' : 'https://www.youtube.com/watch?v=fNCesoSwj6A&pp=ygUWTWlsYW4gNEsgLSBOaWdodCBEcml2ZQ%3D%3D', 'Los Angeles, California, USA' : 'https://www.youtube.com/watch?v=8ziL3gjSA5Y', 'Hollywood, California, USA' : 'https://www.youtube.com/watch?v=FOlPJiqGwHk', 'Springfield, Illinois, USA' : 'https://www.youtube.com/watch?v=C4cPya8L0Uw&pp=ygVCRHJpdmluZyBBcm91bmQgRG93bnRvd24gU3ByaW5nZmllbGQsIElsbGlub2lzIGF0IE5pZ2h0IGluIDRrIFZpZGVv', 'Washington DC, Virginia, USA' : 'https://www.youtube.com/watch?v=-E8yftfCPp0&pp=ygVKV2FzaGluZ3RvbiBELkMgYXQgTmlnaHQgOiBKdXN0IGJlZm9yZSB0aGUgQ292aWQtMTkgUGFuZGVtaWMsIEZlYnJ1YXJ5IDIwMjA%3D', 'Londres, Reino Unido' : 'https://www.youtube.com/watch?v=Ujyu8foke60&pp=ygUcTG9uZG9uIDRLIC0gTmlnaHQgRHJpdmUgLSBVSw%3D%3D', 'Campana Solar' : 'https://www.youtube.com/watch?v=iU2wPRJ8RUE', 'Ciudad de México, México' : 'https://www.youtube.com/watch?v=MpA3FHZ3yZc&pp=ygUzU2t5c2NyYXBlciBTa3lsaW5lIC0gTWV4aWNvIENpdHkgNEsgLSBNb3JuaW5nIERyaXZl', 'París, Francia' : 'https://www.youtube.com/watch?v=8mf5prrubCM&pp=ygUdTW9ybmluZyBSYWluIC0gUGFyaXMgRHJpdmUgNEs%3D', 'Bristol, Inglaterra' : 'https://www.youtube.com/watch?v=Slf3WJ8gnuw&pp=ygUuQnJpc3RvbCA0SyAtIEVuZ2xhbmQgU3VuZGF5IC0gRHJpdmluZyBEb3dudG93bg%3D%3D', 'Chicago, Illinois, USA (Parte 2)' : 'https://www.youtube.com/watch?v=Xn9gzG_qQoQ&pp=ygU6RHJpdmluZyBpbnRvIERvd250b3duIENoaWNhZ28gLSBNb3JuaW5nIERyaXZlIC0gQ2hpY2FnbyA0Sw%3D%3D', 'Playa Copacabana, Rio de Janeiro, Brasil' : 'https://www.youtube.com/watch?v=_hWCN1yV9TY&pp=ygUpUmlvIDRLIC0gQ29wYWNhYmFuYSBCZWFjaCAtIE1vcm5pbmcgRHJpdmU%3D', 'Buenos Aires, Argentina' : 'https://www.youtube.com/watch?v=-TPJot7-HTs&pp=ygVBIDA6MDEgLyA0OTowOCBCdWVub3MgQWlyZXMgNEsgLSBEcml2aW5nIERvd250b3duIC0gTW9ybmluZyBEcml2ZSA%3D', 'Villas Alpinas, Suiza' : 'https://www.youtube.com/watch?v=lCQK_Kyiw-Q&pp=ygUtU3dpdHplcmxhbmQgNEsgLSBTY2VuaWMgRHJpdmUgLSBBbHBzIFZpbGxhZ2Vz', 'Barcelona, España' : 'https://www.youtube.com/watch?v=gmalRuDt1rc&pp=ygUXQkFSQ0VMT05BIERSSVZF44CQNEvjgJE%3D', 'Orlando, Florida, USA' : 'https://www.youtube.com/watch?v=2dKSXyy7M3M&pp=ygUoT3JsYW5kbywgRmxvcmlkYSB8IERyaXZpbmcgRG93bnRvd24gWzRLXQ%3D%3D', 'Canberra, Australia' : 'https://www.youtube.com/watch?v=ulm0-H3V3HU&pp=ygUdQ2FuYmVycmEgQXVzdHJhbGlhIC0gNEsgRHJpdmU%3D', 'Sydney, Australia' : 'https://www.youtube.com/watch?v=jTyfIV2wres&pp=ygU2RHJpdmluZyBJbiBUaGUgQ2l0eSBDZW50cmUgfCBTeWRuZXkgQXVzdHJhbGlhIHwgNEsgVUhE', 'Lima, Perú' : 'https://www.youtube.com/watch?v=dk-NdzCrxvw', 'Washington DC, Virginia, USA (Parte 2)' : 'https://www.youtube.com/watch?v=s6YI-l5xJEI&pp=ygU6V2FzaGluZ3RvbiBEQyA0SyAtIFRoZSBVUyBDYXBpdGFsIC0gRHJpdmluZyBEb3dudG93biAtIFVTQQ%3D%3D', 'Central Park, New York, USA' : 'https://www.youtube.com/watch?v=SsFr0PMNGCA&pp=ygVSRHJpdmluZyBEb3dudG93biBDZW50cmFsIFBhcmsgNEsgLSBOZXcgWW9yayBDaXR5LCBUaGUgTW9zdCBGYW1vdXMgUGFyayBpbiBOZXcgWW9yaw%3D%3D', 'Oakland, California, USA' : 'https://www.youtube.com/watch?v=46OWnFgBB5k&pp=ygU644CQNEs2MOOAkSBEcml2aW5nIC0gT2FrbGFuZDogRG93bnRvd24gT2FrbGFuZCwgQ2FsaWZvcm5pYQ%3D%3D', 'Dubai, Emiratos Árabes Unidos' : 'https://www.youtube.com/watch?v=TE2tfavIo3E&pp=ygUvRHViYWkgNEsgLSBEcml2aW5nIERvd250b3duIC0gU2t5c2NyYXBlciBTdW5zZXQ%3D'},
    'sexta' : {'Campana Lunar' : 'https://www.youtube.com/watch?v=iU2wPRJ8RUE', 'Detroit, Michigan, USA' : 'https://www.youtube.com/watch?v=44Z4T_wRVmM&pp=ygUuRGV0cm9pdCA0SyAtIE5lb24gTmlnaHRsaWZlIC0gRHJpdmluZyBEb3dudG93bg%3D%3D', 'Chicago, Illinois, USA' : 'https://www.youtube.com/watch?v=9Prtp_eNUiI&pp=ygUrQ2hpY2FnbyA0SyAtIE5pZ2h0IERyaXZlIC0gRHJpdmluZyBEb3dudG93bg%3D%3D', 'Miami, Orlando, USA' : 'https://www.youtube.com/watch?v=Cod_ggrs69U&pp=ygUWTWlhbWkgNEsgLSBOaWdodCBEcml2ZQ%3D%3D', 'Aeropuerto de Rio de Janeiro, Brasil' : 'https://www.youtube.com/watch?v=KKeVvM_VtwM', 'Distrito rascacielos, Rio de Janeiro, Brasil' : 'https://www.youtube.com/watch?v=fG_idt30MZA', 'Las Vegas, Nevada, USA' : 'https://www.youtube.com/watch?v=HZaLvgP-R8E&pp=ygUdTGFzIFZlZ2FzIDRLIC0gTWlkbmlnaHQgRHJpdmU%3D', 'Buenos Aires, Argentina' : 'https://www.youtube.com/watch?v=GLOxnXALjHs&pp=ygVUQnVlbm9zIEFpcmVzIChBdiBDb3JyaWVudGVzIC0gUHVlcnRvIE1hZGVybyAtIENlbnRybyBBIEZsb3JlcykgTmlnaHQgRHJpdmUgNEsgNjAgRnBz', 'Buenos Aires, Argentina (Parte 2)' : 'https://www.youtube.com/watch?v=5yEbWIeSowY&pp=ygU5TGF0ZSBOaWdodCBEcml2ZSAtIEJ1ZW5vcyBBaXJlcyBBcmdlbnRpbmEgMjAyMiA0SyBVbHRyYUhE', 'Hollywood, California, USA' : 'https://www.youtube.com/watch?v=FOlPJiqGwHk', 'Buenos Aires, Argentina (Parte 3)' : 'https://www.youtube.com/watch?v=8OlboCRLdv0&pp=ygVBQnVlbm9zIEFpcmVzIEFyZ2VudGluYSAoRHJpdmluZyBUb3VyIC0gTmlnaHQpIFVsdHJhSEQgNGsgU29ueSBBNzM%3D', 'Londres, Reino Unido' : 'https://www.youtube.com/watch?v=e3rD9ofdpvw&pp=ygVSTG9uZG9uIDRL8J-SgkRyaXZpbmcgRG93bnRvd24gTG9uZG9uIG9uIFRvd2VyIEJyaWRnZfCfkoJDZW50cmFsIExvbmRvbiBOaWdodCBEcml2ZQ%3D%3D', 'Campana Solar' : 'https://www.youtube.com/watch?v=iU2wPRJ8RUE', 'Milan, Louisiana, USA' : 'https://www.youtube.com/watch?v=ZByZSqoqzaI&pp=ygUqTWlsYW4gNEsgLSBNb3JuaW5nIFJhaW4gLSBEcml2aW5nIERvd250b3du', 'Buenos Aires, Argentina (Parte 4)' : 'https://www.youtube.com/watch?v=-TPJot7-HTs&pp=ygVBIDA6MDEgLyA0OTowOCBCdWVub3MgQWlyZXMgNEsgLSBEcml2aW5nIERvd250b3duIC0gTW9ybmluZyBEcml2ZSA%3D', 'Aspen, Colorado, USA' : 'https://www.youtube.com/watch?v=shP1PLHY_6o&pp=ygU2QXNwZW4gNEsgLSBIb2xseXdvb2QncyBTa2kgUmVzb3J0IC0gU2NlbmljIERyaXZlIC0gVVNB', 'Rodeo Drive, Los Angeles, California, USA' : 'https://www.youtube.com/watch?v=PgnsapPGaaw&pp=ygUtTG9zIEFuZ2VsZXMgNEsgLSBSb2RlbyBEcml2ZSBPYmplY3QgRGV0ZWN0aW9u', 'Union Sqare, San Francisco, California, USA' : 'https://www.youtube.com/watch?v=R7qiWeX4RQw&pp=ygU2RHJpdmluZyBEb3dudG93biAtIFNhbiBGcmFuY2lzY28gVW5pb24gU3F1YXJlIDRLIC0gVVNB', 'Madrid, España' : 'https://www.youtube.com/watch?v=C911U_Fo-QU&pp=ygUkTWFkcmlkIDRLIC0gRHJpdmluZyBEb3dudG93biAtIFNwYWlu', 'Barcelona, España' : 'https://www.youtube.com/watch?v=jDvJoOgH3Zk&pp=ygUtQmFyY2Vsb25hIDRLIC0gTmlnaHQgRHJpdmUgLSBEcml2aW5nIERvd250b3du', 'Orlando, Florida, USA' : 'https://www.youtube.com/watch?v=2dKSXyy7M3M&pp=ygUoT3JsYW5kbywgRmxvcmlkYSB8IERyaXZpbmcgRG93bnRvd24gWzRLXQ%3D%3D', 'Canberra, Australia' : 'https://www.youtube.com/watch?v=ulm0-H3V3HU&pp=ygUdQ2FuYmVycmEgQXVzdHJhbGlhIC0gNEsgRHJpdmU%3D', 'Sydney, Australia' : 'https://www.youtube.com/watch?v=jTyfIV2wres&pp=ygU2RHJpdmluZyBJbiBUaGUgQ2l0eSBDZW50cmUgfCBTeWRuZXkgQXVzdHJhbGlhIHwgNEsgVUhE', 'Distrito rascacielos, Londres, Reino Unido' : 'https://www.youtube.com/watch?v=QI4_dGvZ5yE&pp=ygU2TG9uZG9uIDRLIC0gU2t5c2NyYXBlciBEaXN0cmljdCBEcml2ZSAtIENpdHkgb2YgTG9uZG9u', 'Salta, Argentina' : 'https://www.youtube.com/watch?v=w5tpQkwaMrE&pp=ygUsU2FsdGEgQXJnZW50aW5hIDIwMjIgRHJpdmluZyBUb3VyIDRrIFVsdHJhSEQ%3D', 'Venecia a Murano, Italia' : 'https://i.ytimg.com/vi/ZU0xoRixntA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAytaTPeCMUJCrRIrOLwcRrzhzx-A', 'Berlín, Alemania' : 'https://www.youtube.com/watch?v=lBlKR2ek0w4&pp=ygVqQmVybGluIC0gR2VybWFueSDwn4ep8J-HqiBEcml2aW5nIFRvdXIgWzRLXSBBbGV4YW5kZXJwbGF0eiwgUG90c2RhbWVyIFBsYXR6LCBCcmFuZGVuYnVyZyBHYXRlLCBXZXN0LUJlcmxpbg%3D%3D', 'Centro de París, Francia' : 'https://www.youtube.com/watch?v=lN43inpI2lk&pp=ygU4RHJpdmluZyBpbnRvIENlbnRyYWwgUGFyaXMgLSBEcml2aW5nIERvd250b3duIC0gUGFyaXMgNEs%3D', 'Hong Kong, China' : 'https://www.youtube.com/watch?v=i_gtzcoxpjg&pp=ygVnSG9uZyBLb25nIDRLIC0gQWZ0ZXJub29uIERyaXZlIC0gVHNpbSBTaGEgVHN1aSB8IOais-Wjq-W3tOWIqemBkyDlu6PmnbHpgZMg5Yqg5ou_5YiG6YGTIOWKoOmAo-WogeiAgemBkw%3D%3D', 'Miami, Orlando, USA (Parte 2)' : 'https://www.youtube.com/watch?v=ASaXDIDStG4&pp=ygUuTWlhbWkgNEsgLSBTaW5nYXBvcmUgT2YgVGhlIFVTQSAtIFN1bnNldCBEcml2ZQ%3D%3D', 'San Francisco, California, USA' : 'https://www.youtube.com/watch?v=cFS7-CHCaiw&pp=ygUwU2FuIEZyYW5jaXNjbyA0SyAtIEdvbGQgSGVhZGxhbmRzIC0gU2NlbmljIERyaXZl', 'Distrito del teátro, Jardin del Convento, Londres, Reino Unido' : 'https://www.youtube.com/watch?v=paVB7zNvb0E&pp=ygVKTG9uZG9uIDRLIC0gVGhlYXRlciBEaXN0cmljdCAtIENvbnZlbnQgR2FyZGVuIC0gRHJpdmluZyBEb3dudG93biAtIEVuZ2xhbmQ%3D', 'Cañon Bryce, Utah, USA' : 'https://www.youtube.com/watch?v=xsW00gX-KMs&pp=ygU3QnJ5Y2UgQ2FueW9uIE5hdGlvbmFsIFBhcmsgNEsgLSBTY2VuaWMgRHJpdmUgLSBVdGFoIFVTQQ%3D%3D', 'Costa Californiana, USA' : 'https://www.youtube.com/watch?v=VA9q5nG8OcM&pp=ygUsQ2FsaWZvcm5pYSBDb2FzdCA0SyAtIFN1bnNldCBEcml2ZSAtIEJpZyBTdXI%3D', 'Dubai, Emiratos Árabes Unidos' : 'https://www.youtube.com/watch?v=TE2tfavIo3E&pp=ygUvRHViYWkgNEsgLSBEcml2aW5nIERvd250b3duIC0gU2t5c2NyYXBlciBTdW5zZXQ%3D', 'Redwood National Park, California, USA' : 'https://www.youtube.com/watch?v=iS5xRxtnuhE&pp=ygU0UmVkd29vZCBOYXRpb25hbCBQYXJrIDRLIC0gU2NlbmljIERyaXZlIC0gQ2FsaWZvcm5pYQ%3D%3D'}
};