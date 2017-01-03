module.exports = {
	port: process.env.PORT || 2000,
	db: process.env.MONGOLAB_URI || "mongodb://localhost/test",
	test_port: 2001,
	test_db: "mongodb://localhost/test"
}