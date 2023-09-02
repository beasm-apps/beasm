// Copyright (c) 2015, Frappe Technologies Pvt. Ltd. and Contributors
// License: GNU General Public License v3. See license.txt

frappe.require("assets/beasm/js/purchase_trends_filters.js", function() {
	frappe.query_reports["Purchase Invoice Trends"] = {
		filters: beasm.get_purchase_trends_filters()
	}
});
