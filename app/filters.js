module.exports = function (env) {
  /**
   * Instantiate object used to store the methods registered as a
   * 'filter' (of the same name) within nunjucks. You can override
   * gov.uk core filters by creating filter methods of the same name.
   * @type {Object}
   */
  var filters = {

  }

  //Basic filter to add in seperators in numbers
  filters.commaSeperated = function (num) {
    return num.toLocaleString()
  }

  return filters
}
