module.exports = (sequelize, type) => {
	return sequelize.define('category', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		name: Sequelize.STRING,
		enabled: Sequelize.BOOLEAN,
		createdAt: Sequelize.DATE,
		updatedAt: Sequelize.DATE,
	})
}
