function GHashMap() {
    /**Map大小**/
    var size = 0;
    /**对象**/
    var entry = new Object();
    /**Map的存put方法**/
    this.put = function(key, value) {
        if (!this.containsKey(key)) {
            size++;
            entry[key] = value;
        }
    }
    /**Map取get方法**/
    this.get = function(key) {
        return this.containsKey(key) ? entry[key] : null;
    }
    /**Map删除remove方法**/
    this.remove = function(key) {
        if (this.containsKey(key) && (delete entry[key])) {
            size--;
        }
    }
    /**是否包含Key**/
    this.containsKey = function(key) {
        return (key in entry);
    }
    /**是否包含Value**/
    this.containsValue = function(value) {
        for (var prop in entry) {
            if (entry[prop] == value) {
                return true;
            }
        }
        return false;
    }
    /**所有的Value**/
    this.values = function() {
        var values = new Array();
        for (var prop in entry) {
            values.push(entry[prop]);
        }
        return values;
    }
    /**所有的 Key**/
    this.keys = function() {
        var keys = new Array();
        for (var prop in entry) {
            keys.push(prop);
        }
        return keys;
    }
    /**Map size**/
    this.size = function() {
        return size;
    }
    /**清空Map**/
    this.clear = function() {
        size = 0;
        entry = new Object();
    }
}

module.exports=GHashMap;