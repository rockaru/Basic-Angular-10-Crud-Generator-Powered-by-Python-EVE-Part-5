MONGO_HOST = 'localhost'
MONGO_PORT = 27017
MONGO_DBNAME = 'apitest'

RESOURCE_METHODS = ['GET', 'POST', 'DELETE']
ITEM_METHODS = ['GET', 'PATCH', 'PUT', 'DELETE']

IF_MATCH = False
PAGINATION = False

EXTENDED_MEDIA_INFO = ['content_type', 'name', 'length']

SCHEMA_ENDPOINT = 'form'

cats = {
    'item_title': 'cat',
    'cache_control': 'max-age=0,must-revalidate',
    'cache_expires': 1,
    'schema': {
        'name': {
            'type': 'string',
            'minlength': 1,
            'maxlength': 10,
            'create': True,
            'read': True,
            'update': False
        },
        'age': {
            'type': 'number',
            'minlength': 1,
            'maxlength': 2,
            'create': True,
            'read': True,
            'update': True
        },
        'breed': {
            'type': 'select',
            'data_relation': {
                'resource': 'catBreeds',
                            'field': '_id',
                            'embeddable': True
            },
            'create': True,
            'read': True,
            'update': False
        },
        'friendly': {
            'type': 'boolean',
            'create': True,
            'read': True,
            'update': False
        },
        'description': {
            'type': 'text',
            'minlength': 1,
            'maxlength': 200,
            'create': True,
            'read': True,
            'update': True
        },
        'photo': {
            'type': 'image',
            'create': True,
            'read': True,
            'update': True
        },
        'file': {
            'type': 'file',
            'create': True,
            'read': True,
            'update': True
        },
        'trained': {
            'type': 'selectradio',
            'allowed': [True, False],
            'create': True,
            'read': True,
            'update': True
        },
        'tail': {
            'type': 'selectradio',
            'allowed': ['long', 'short'],
            'create': True,
            'read': True,
            'update': True
        },
        'adorable': {
            'type': 'selectradio',
            'allowed': [0, 3, 5, 10],
            'create': True,
            'read': True,
            'update': True
        },
    }
}

catBreeds = {
    'item_title': 'cat breed',
    'cache_control': 'max-age=0,must-revalidate',
    'cache_expires': 1,
    'additional_lookup': {
        'url': 'regex("[\w]+")',
        'field': 'name',
    },
    'schema': {
        'name': {
            'type': 'string',
            'minlength': 1,
            'maxlength': 10,
            'unique': True,
            'create': True,
            'read': True,
            'update': False
        },
    }
}

dogs = {
    'item_title': 'dog',
    'cache_control': 'max-age=0,must-revalidate',
    'cache_expires': 1,
    'schema': {
        'name': {
            'type': 'string',
            'input': 'text',
            'minlength': 1,
            'maxlength': 10,
            'create': True,
            'read': True,
            'update': False
        },
        'age': {
            'type': 'number',
            'input': 'number',
            'minlength': 1,
            'maxlength': 2,
            'create': True,
            'read': True,
            'update': True
        },
        'breed': {
            'type': 'objectid',
            'input': 'select',
            'data_relation': {
                'resource': 'dogBreeds',
                            'field': '_id',
                            'embeddable': True
            },
            'create': True,
            'read': True,
            'update': False
        },
        'friendly': {
            'type': 'boolean',
            'input': 'checkbox',
            'create': True,
            'read': True,
            'update': False
        },
        'description': {
            'type': 'string',
            'input': 'textarea',
            'minlength': 1,
            'maxlength': 200,
            'create': True,
            'read': True,
            'update': True
        },
        'photo': {
            'type': 'media',
            'input': 'image',
            'create': True,
            'read': True,
            'update': True
        },
        'file': {
            'type': 'media',
            'input': 'file',
            'create': True,
            'read': True,
            'update': True
        },
        'tail': {
            'type': 'string',
            'input': 'selectradio',
            'allowed': ['long', 'short'],
            'create': True,
            'read': True,
            'update': True
        },
        'colors': {
            'type': 'list',
            'input': 'selectmulti',
            'schema': {
                'type': 'dict',
                'schema': {
                        'name': {
                            'type': 'objectid',
                            'data_relation': {
                                'resource': 'colors',
                                'field': '_id',
                                'embeddable': True
                            }
                        }
                }

            },
            'create': True,
            'read': True,
            'update': True
        }
    }
}

colors = {
    'item_title': 'dog breed',
    'cache_control': 'max-age=0,must-revalidate',
    'cache_expires': 1,
    'additional_lookup': {
        'url': 'regex("[\w]+")',
        'field': 'name',
    },
    'schema': {
        'name': {
            'type': 'string',
            'minlength': 1,
            'maxlength': 10,
            'unique': True,
            'create': True,
            'read': True,
            'update': False
        },
    }
}

dogBreeds = {
    'item_title': 'dog breed',
    'cache_control': 'max-age=0,must-revalidate',
    'cache_expires': 1,
    'additional_lookup': {
        'url': 'regex("[\w]+")',
        'field': 'name',
    },
    'schema': {
        'name': {
            'type': 'string',
            'minlength': 1,
            'maxlength': 10,
            'unique': True,
            'create': True,
            'read': True,
            'update': False
        },
    }
}

DOMAIN = {
    'cats': cats,
    'catBreeds': catBreeds,
    'dogs': dogs,
    'dogBreeds': dogBreeds,
    'colors': colors
}
