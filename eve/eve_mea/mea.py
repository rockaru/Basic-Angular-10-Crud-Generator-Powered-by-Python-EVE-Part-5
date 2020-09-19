from eve import Eve
from .fields import MeaFields

Mea = Eve(validator=MeaFields)

Mea.config["SCHEMA_ENDPOINT"]='form'
Mea._init_schema_endpoint()

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