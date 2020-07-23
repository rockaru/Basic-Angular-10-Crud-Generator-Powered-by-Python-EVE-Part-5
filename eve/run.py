from eve import Eve
from eve.io.mongo import Validator

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
        def _validate_type_text(self,value):
                
                """ Enables validation for `objectid` schema attribute.
                :param value: field value.
                """
                if isinstance(value,str):
                        return True

app = Eve(validator=MyValidator)

if __name__ == '__main__':
        app.run()