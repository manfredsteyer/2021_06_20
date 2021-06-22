// import './bootstrap';
import { loadRemoteEntry } from '@angular-architects/module-federation';

// fetch('/api/registry/all-remotes')

Promise.all([
	loadRemoteEntry('http://localhost:3000/remoteEntry.js', 'passenger'),
	loadRemoteEntry('http://localhost:3000/remoteEntry.js', 'passenger'),
	loadRemoteEntry('http://localhost:3000/remoteEntry.js', 'passenger'),

])
	.catch(err => console.error(err))
	.then(_ => import('./bootstrap'))
	.catch(err => console.error(err));

