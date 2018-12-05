module.exports = (sequelize, type) => {
	return sequelize.define('post', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		title: Sequelize.STRING,
		body: Sequelize.TEXT,
		createdAt: Sequelize.DATE,
		updatedAt: Sequelize.DATE,
	})
}
