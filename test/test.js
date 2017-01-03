var assert = require('assert'),
    chai = require('chai'),
    expect = chai.expect,
    sinonChai = require('sinon-chai'),
    sinon = require('sinon');

var Logger    = require('../index.js');

chai.use(sinonChai);

var levelKey = [
    'DEBUG',
    'INFO',
    'WARN',
    'ERROR',
];

describe('log', function() {
  describe('level: default', function() {
    before(function() {
      log = new Logger();
    });

    beforeEach(function() {
      sinon.spy(process.stdout, 'write');
    });

    afterEach(function() {
      if (process.stdout.write.restore) {
          process.stdout.write.restore();
      }
    });

    it('log.info.ln => it shoud display an info log', function() {
      log.info.ln('test');
      expect(process.stdout.write).to.be.called;
    });

    it('log.debug.ln => it shoud not display a debug log', function() {
      log.debug.ln('test');
      expect(process.stdout.write).not.to.be.called;
    });

    it('log.warn.ln => it shoud display a warn log', function() {
      log.warn.ln('test');
      expect(process.stdout.write).to.be.called;
    });

    it('log.error.ln => it shoud display an error log', function() {
      log.error.ln('test');
      expect(process.stdout.write).to.be.called;
    });

    it('log.info.ok => it shoud display an error log', function() {
      log.info.ok('test');
      expect(process.stdout.write).to.be.called;
    });

    it('log.info.ok => it shoud display an error log', function() {
      log.info.fail('test');
      expect(process.stdout.write).to.be.called;
    });
  });

  describe('level: DEBUG', function() {
    before(function() {
      log = new Logger();
      log.setLevel('DEBUG');
    });

    beforeEach(function() {
      sinon.spy(process.stdout, 'write');
    });

    afterEach(function() {
      if (process.stdout.write.restore) {
          process.stdout.write.restore();
      }
    });

    it('log.info.ln => it shoud display an info log', function() {
      log.info.ln('test');
      expect(process.stdout.write).to.be.called;
    });

    it('log.debug.ln => it shoud display a debug log', function() {
      log.debug.ln('test');
      expect(process.stdout.write).to.be.called;
    });

    it('log.warn.ln => it shoud display a warn log', function() {
      log.warn.ln('test');
      expect(process.stdout.write).to.be.called;
    });

    it('log.error.ln => it shoud display an error log', function() {
      log.error.ln('test');
      expect(process.stdout.write).to.be.called;
    });
  });
});
