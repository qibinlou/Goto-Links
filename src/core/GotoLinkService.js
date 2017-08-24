class GotoLink {
  constructor(linkName, namespace = 'go') {
    this.linkName = linkName;
    this.namespace = namespace;
  }

  toString() {
    return this.namespace + '/' + this.linkName;
  }

}

class KVDB {

  constructor(options = {}) {
    this.options = options;
    this.storage = null;
  }

  get(key) { return null; }

  set(key, value) { }

}

class LocalKVDB extends KVDB {
  constructor(options = {}) {
    super(options);
    this.storage = window.localStorage;
  }

  get(key) {
    return this.storage.getItem(key);
  }

  set(key, value) {
    this.storage.setItem(key, value);
  }
}

class GotoLinkService {

  constructor(db) {
    this.db = db;
  }

  set(gotoLink, url) {
    this.db.set(gotoLink.toString(), url);
  }

  get(gotoLink) {
    return this.db.get(gotoLink.toString());
  }

  getAllRecords() {

  }

  search(keyword) {

  }

}

export default GotoLinkService;
export {
  GotoLink,
  KVDB,
  LocalKVDB,
};