# Copyright (c) 2013, Frappe Technologies Pvt. Ltd. and contributors
# For license information, please see license.txt


from datetime import datetime

import frappe
from frappe.tests.utils import FrappeTestCase

from beasm.buying.doctype.purchase_order.purchase_order import make_purchase_receipt
from beasm.buying.report.procurement_tracker.procurement_tracker import execute
from beasm.stock.doctype.material_request.material_request import make_purchase_order
from beasm.stock.doctype.material_request.test_material_request import make_material_request
from beasm.stock.doctype.warehouse.test_warehouse import create_warehouse


class TestProcurementTracker(FrappeTestCase):
	pass
