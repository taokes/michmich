/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var shop = require('./shop.model');

exports.register = function(socket) {
  shop.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  shop.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
};

function onSave(socket, doc, cb) {
  socket.emit('shop:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('shop:remove', doc);
}