from eve import Eve
from eve.io.mongo import Validator
from werkzeug.datastructures import FileStorage
from bson import ObjectId

class MyValidator(Validator):
        def _validate_create(self, alias, field, value):
                """ {'type': 'boolean'} """
                pass
        def _validate_read(self, alias, field, value):
                """ {'type': 'boolean'} """
                pass
        def _validate_update(self, alias, field, value):
                """ {'type': 'boolean'} """
                pass
        def _validate_input(self, alias, field, value):
                """ {'type': 'string'} """
                pass
        def _validate_icon(self,alias,field,value):
                """ {'type':'string'} """
                pass
        def _validate_colection(self,alias,field,value):
                """ {'type':'list'} """
                pass
        def _validate_display(self,alias,field,value):
                """ {'type':'string'} """
                pass
                        

app = Eve(validator=MyValidator)

if __name__ == '__main__':
        app.run(host='0.0.0.0',port='5000')