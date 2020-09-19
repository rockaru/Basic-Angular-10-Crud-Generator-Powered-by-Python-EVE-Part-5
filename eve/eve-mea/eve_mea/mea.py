from eve import Eve
from eve.io.mongo import Validator

class MeaFields(Validator):

    def _validate_input(self, alias, field, value):
        pass

    def _validate_icon(self, alias, field, value):
        pass

    def _validate_title(self, alias, field, value):
        pass

    def _validate_desc(self, alias, field, value):
        pass

    def _validate_collection(self, alias, field, value):
        pass

    def _validate_display(self, alias, field, value):

        pass

    def _validate_variables(self, alias, field, value):
        pass

    def _validate_form_page(self, alias, field, value):
        pass

    def _validate_pages(self, alias, field, value):
        pass

    def _validate_page_titles(self, alias, field, value):
        pass

    def _validate_show_titles(self, alias, field, value):
        pass

    def _validate_navigation(self, alias, field, value):
        pass

    def _validate_text_cols(self, alias, field, value):
        pass

    def _validate_text_rows(self, alias, field, value):
        pass

    def _validate_pattern(self, alias, field, value):
        pass

    def _validate_label(self, alias, field, value):
        pass

    def _validate_hint(self, alias, field, value):
        pass

    def _validate_show_hint(self, alias, field, value):
        pass

    def _validate_save_type(self, alias, field, value):
        pass

    def _validate_show_label(self, alias, field, value):
        pass

    def _validate_show_icon(self, alias, field, value):
        pass

    def _validate_show_pre(self, alias, field, value):
        pass

    def _validate_show_after(self, alias, field, value):
        pass

    def _validate_fill_default(self, alias, field, value):
        pass

    def _validate_label_true(self, alias, field, value):
        pass

    def _validate_label_false(self, alias, field, value):
        pass

    def _validate_default_template(self, alias, field, value):
        pass

Mea = Eve(validator=MeaFields)

Mea.register_resource('template',{'schema': {
        'template name': {
            'type': 'string',
            'input': 'text',
            'title':True,
            'icon': '',
            'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},
            'form_page': 1,
            'label': 'Template Name',
            'show_label': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True, 'preview': True},
            'show_icon': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True, 'preview': True},


        },


        'document': {
            'type': 'string',
            'input': 'richtext',
            'icon': '',
            'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},
            'show_icon': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True, 'preview': True},
            'show_label': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True, 'preview': True},

            'form_page': 1,
        },
        'meta': {
            'pages': 1,
            'input': 'meta',
            'title': 'Template',
            'navigation': True,
            'show_titles': False,
        }
    }})
Mea.register_resource('template_relation',{'schema': {
        'template name': {
            'type': 'string',
            'input': 'text',
            'title':True,
            'icon': '',
            'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},
            'form_page': 1,
            'label': 'Template Name',
            'show_label': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True, 'preview': True},
            'show_icon': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True, 'preview': True},


        },


        'resource': {
            'type': 'string',
            'input': 'richtext',
            'icon': '',
            'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},
            'show_icon': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True, 'preview': True},
            'show_label': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True, 'preview': True},

            'form_page': 1,
        },
        'meta': {
            'pages': 1,
            'input': 'meta',
            'title': 'Template',
            'navigation': True,
            'show_titles': False,
        }
    }})