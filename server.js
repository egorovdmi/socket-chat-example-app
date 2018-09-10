// These are important and needed before anything else
require('zone.js/dist/zone-node');
require('reflect-metadata');

var express = require('express');
var join = require('path').join;

// Express server
const app = express();

const PORT = process.env.PORT || 80;
const DIST_FOLDER = join(process.cwd(), 'dist');
const appFolder = 'socket-chat-example-app';

// Server static files from /browser
app.get('*.*', express.static(join(DIST_FOLDER, appFolder)));

// All regular routes use the Universal engine
app.get('*', (req, res) => {
  res.sendFile('index.html', {root : join(DIST_FOLDER, appFolder)});
});

// Start up the Node server
app.listen(PORT, () => {
  console.log(`Node server listening on http://localhost:${PORT}`);
});
