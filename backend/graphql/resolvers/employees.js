const Employee = require("../../models/Employee");
const axios = require("axios");

module.exports = {
  Query: {
    getEmployees: async () => {
      try {
        const employees = await Employee.find();
        return employees;
      } catch (error) {
        throw error;
      }
    },
    async getCompanyEmployees(_, args) {
      try {
        const search = args.filter;
        const employees = await Employee.find().where({ company: search });
        return employees;
      } catch (error) {
        throw error;
      }
    },
  },
};
