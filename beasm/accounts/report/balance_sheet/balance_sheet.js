// Copyright (c) 2015, Frappe Technologies Pvt. Ltd. and Contributors
// License: GNU General Public License v3. See license.txt

frappe.require("assets/beasm/js/financial_statements.js", function () {
	frappe.query_reports["Balance Sheet"] = $.extend(
		{},
		beasm.financial_statements
	);

	beasm.utils.add_dimensions("Balance Sheet", 10);

	frappe.query_reports["Balance Sheet"]["filters"].push({
		fieldname: "accumulated_values",
		label: __("Accumulated Values"),
		fieldtype: "Check",
		default: 1,
	});
	console.log(frappe.query_reports["Balance Sheet"]["filters"]);

	frappe.query_reports["Balance Sheet"]["filters"].push({
		fieldname: "include_default_book_entries",
		label: __("Include Default Book Entries"),
		fieldtype: "Check",
		default: 1,
	});
});
