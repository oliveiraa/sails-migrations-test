module.exports = function (grunt) {
	grunt.registerTask('default', ['compileAssets', 'linkAssets',  'watch']);
	grunt.loadNpmTasks('sails-migrations');
};
