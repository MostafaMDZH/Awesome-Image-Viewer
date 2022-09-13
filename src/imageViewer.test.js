const ImageViewer = require('./imageViewer.js');

test('sample test', () => {
    const sb = new ImageViewer({
        images: []
    });
    expect(typeof sb).toEqual('object');
});