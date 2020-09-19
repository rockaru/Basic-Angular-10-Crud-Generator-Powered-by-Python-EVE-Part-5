MONGO_HOST = 'localhost'
MONGO_PORT = 27017
MONGO_DBNAME = 'apitest1'

RESOURCE_METHODS = ['GET', 'POST', 'DELETE']
ITEM_METHODS = ['GET', 'PATCH', 'PUT', 'DELETE']
HATEOAS = False
IF_MATCH = False
PAGINATION = False

EXTENDED_MEDIA_INFO = ['content_type', 'name', 'length']


dogs = {
    'item_title': 'dog',
    'cache_control': 'max-age=0,must-revalidate',
    'cache_expires': 1,
    'schema': {

        'name': {
            'type': 'string',
            'input': 'text',
            'icon': '',
            'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},
            'form_page': 1,
            'title': True,
            'minlength': 1,
            'maxlength': 10,

        },
        'age': {
            'type': 'number',
            'input': 'number',
            'icon': '',
            'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},
            'form_page': 1,

            'minlength': 1,
            'maxlength': 2,

        },
        'breed': {
            'type': 'objectid',
            'input': 'select_collection',
            'icon': '',
            'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},
            'form_page': 1,

            'data_relation': {
                'resource': 'dogBreeds',
                'field': '_id',
                'embeddable': True
            },

        },
        'friendly': {
            'type': 'boolean',
            'input': 'checkbox',
            'icon': '',
            'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},
            'form_page': 1,


        },
        'description': {
            'type': 'string',
            'input': 'textarea',
            'icon': '',
            'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},
            'form_page': 1,
            'desc': True,
            'minlength': 1,
            'maxlength': 200,

        },
        'photo': {
            'type': 'media',
            'input': 'image',
            'icon': '',
            'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},
            'form_page': 1,

        },
        'file': {
            'type': 'media',
            'input': 'file',
            'icon': '',
            'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},


        },
        'tail': {
            'type': 'string',
            'input': 'radio_list',
            'icon': '',
            'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},
            'form_page': 1,

            'allowed': ['long', 'short'],

        },
        'email': {
            'type': 'string',
            'input': 'email',
            'icon': '',
            'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},
            'form_page': 1,

            'minlength': 1,
            'maxlength': 10,

        },
        'password': {
            'type': 'string',
            'input': 'password',
            'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},
            'form_page': 1,

            'minlength': 1,
            'maxlength': 10,

        },
        'date': {
            'type': 'datetime',
            'input': 'date',
            'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},
            'form_page': 1,

            'minlength': 1,
            'maxlength': 10,

        },
        'datetime': {
            'type': 'datetime',
            'input': 'datetime',
            'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},
            'form_page': 1,

            'minlength': 1,
            'maxlength': 10,

        },
        'profile': {
            'type': 'string',
            'input': 'url',
            'icon': '',
            'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},
            'form_page': 1,

            'minlength': 1,
            'maxlength': 10,

        },
        'tags': {
            'type': 'list',
            'input': 'list',
            'icon': '',
            'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},
            'form_page': 1,


        },
        'colors': {
            'type': 'list',
            'input': 'dual_list',
            'icon': '',
            'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},
            'form_page': 1,

            'schema': {
                'type': 'objectid',
                'data_relation': {
                    'resource': 'colors',
                    'field': '_id',
                    'embeddable': True
                }
            },

        },
        'compus': {
            'type': 'dict',
            'input': 'dict',
            'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},
            'form_page': 1,

            'schema': {
                'profile': {
                    'type': 'string',
                    'input': 'url',
                    'icon': '',
                    'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},
                    'form_page': 1,

                    'minlength': 1,
                    'maxlength': 10,

                },
                'tags': {
                    'type': 'list',
                    'input': 'list',
                    'icon': '',
                    'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},
                    'form_page': 1,


                },
            },

        },
        'combo': {
            'type': 'objectid',
            'input': 'combo',
            'icon': '',
            'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},
            'form_page': 1,

            'collections': ['colors', 'dogBreeds', 'dogs'],

        },
        'owner': {
            'type': 'list',
            'input': 'multi',
            'icon': '',
            'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},
            'form_page': 1,

            'schema': {
                'type': 'dict',
                'schema': {
                    'first name': {
                        'type': 'string',
                        'input': 'text',
                        'icon': '',
                        'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},
                        'form_page': 1,


                    },
                    'last name': {
                        'type': 'string',
                        'input': 'text',
                        'icon': '',
                        'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},
                        'form_page': 1,


                    },
                    'tags': {
                        'type': 'list',
                        'input': 'list',
                        'icon': '',
                        'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},
                        'form_page': 1,


                    },
                    'phone': {
                        'type': 'number',
                        'input': 'number',
                        'icon': '',
                        'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},
                        'form_page': 1,


                    },
                    'hair': {
                        'type': 'objectid',
                        'input': 'select_collection',
                        'icon': '',
                        'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},
                        'form_page': 1,

                        'data_relation': {
                            'resource': 'colors',
                            'field': '_id',
                            'embeddable': True
                        },

                    },
                    'colors': {
                        'type': 'list',
                        'input': 'dual_list',
                        'icon': '',
                        'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},
                        'form_page': 1,

                        'schema': {
                            'type': 'objectid',
                            'data_relation': {
                                'resource': 'colors',
                                'field': '_id',
                                'embeddable': True
                            }
                        },

                    },

                    'test': {
                        'type': 'list',
                        'input': 'multi',
                        'icon': '',
                        'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},
                        'form_page': 1,

                        'schema': {
                            'type': 'dict',
                            'schema': {
                                'first name': {
                                    'type': 'string',
                                    'input': 'text',
                                    'icon': '',
                                    'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},
                                    'form_page': 1,


                                },
                                'tags': {
                                    'type': 'list',
                                    'input': 'list',
                                    'icon': '',
                                    'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},
                                    'form_page': 1,


                                },
                                'last name': {
                                    'type': 'string',
                                    'input': 'text',
                                    'icon': '',
                                    'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},
                                    'form_page': 1,


                                },
                                'phone': {
                                    'type': 'number',
                                    'input': 'number',
                                    'icon': '',
                                    'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},
                                    'form_page': 1,


                                },
                                'hair': {
                                    'type': 'objectid',
                                    'input': 'select_collection',
                                    'icon': '',
                                    'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},
                                    'form_page': 1,

                                    'data_relation': {
                                        'resource': 'colors',
                                        'field': '_id',
                                        'embeddable': True
                                    },

                                },
                                'colors': {
                                    'type': 'list',
                                    'input': 'dual_list',
                                    'icon': '',
                                    'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},
                                    'form_page': 1,

                                    'schema': {
                                        'type': 'objectid',
                                        'data_relation': {
                                            'resource': 'colors',
                                            'field': '_id',
                                            'embeddable': True
                                        }
                                    },

                                },
                                'test': {
                                    'type': 'list',
                                    'input': 'multi',
                                    'icon': '',
                                    'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},
                                    'form_page': 1,

                                    'schema': {
                                        'type': 'dict',
                                        'schema': {
                                            'ceva': {
                                                'type': 'string',
                                                'input': 'text',
                                                'icon': '',
                                                'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},
                                                'form_page': 1,


                                            },
                                        }
                                    },

                                },
                                'altceva cu pauza': {
                                    'type': 'list',
                                    'input': 'multi',
                                    'icon': '',
                                    'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},
                                    'form_page': 1,

                                    'schema': {
                                        'type': 'dict',
                                        'schema': {
                                            'first name': {
                                                'type': 'string',
                                                'input': 'text',
                                                'icon': '',
                                                'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},

                                                'form_page': 1,

                                            },
                                            'last name': {
                                                'type': 'string',
                                                'input': 'text',
                                                'icon': '',
                                                'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},

                                                'form_page': 1,

                                            },
                                            'phone': {
                                                'type': 'number',
                                                'input': 'number',
                                                'icon': '',
                                                'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},
                                                'form_page': 1,


                                            },
                                            'hair': {
                                                'type': 'objectid',
                                                'input': 'select_collection',
                                                'icon': '',
                                                'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},
                                                'form_page': 1,

                                                'data_relation': {
                                                    'resource': 'colors',
                                                    'field': '_id',
                                                    'embeddable': True
                                                },

                                            },
                                            'colors': {
                                                'type': 'list',
                                                'input': 'dual_list',
                                                'icon': '',
                                                'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},
                                                'form_page': 1,

                                                'schema': {
                                                    'type': 'objectid',
                                                    'data_relation': {
                                                        'resource': 'colors',
                                                        'field': '_id',
                                                        'embeddable': True
                                                    }
                                                },

                                            },
                                            'tags': {
                                                'type': 'list',
                                                'input': 'list',
                                                'icon': '',
                                                'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},
                                                'form_page': 1,


                                            },
                                            'test': {
                                                'type': 'list',
                                                'input': 'multi',
                                                'icon': '',
                                                'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},
                                                'form_page': 1,

                                                'schema': {
                                                    'type': 'dict',
                                                    'schema': {
                                                        'ceva': {
                                                            'type': 'string',
                                                            'input': 'text',
                                                            'icon': '',
                                                            'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},
                                                            'form_page': 1,


                                                        },
                                                        'tags': {
                                                            'type': 'list',
                                                            'input': 'list',
                                                            'icon': '',
                                                            'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},

                                                            'form_page': 1,

                                                        },
                                                    }
                                                },

                                            }

                                        }
                                    },

                                }

                            }
                        },

                    }

                }
            },

        }
    }
}

colors = {
    'item_title': 'color',
    'cache_control': 'max-age=0,must-revalidate',
    'cache_expires': 1,
    'additional_lookup': {
        'url': 'regex("[\w]+")',
        'field': 'name',
    },
    'schema': {
        'name': {
            'type': 'string',
            'input': 'text',
            'icon': '',
            'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},
            'form_page': 1,
            'title': True,
            'minlength': 1,
            'maxlength': 10,
            'unique': True,

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
            'input': 'text',
            'icon': '',
            'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},
            'form_page': 1,

            'minlength': 1,
            'maxlength': 10,
            'unique': True,

        },
        'altceva': {
            'type': 'string',
            'input': 'text',
            'icon': '',
            'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},
            'form_page': 1,

            'minlength': 1,
            'maxlength': 10,
            'unique': True,

        },
        'richtext': {
            'type': 'string',
            'input': 'richtext',
            'icon': '',
            'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},

            'form_page': 1,

        }
    }
}

ceva = {
    'schema': {
        'name': {
            'type': 'list'
        }
    }
}

settings = {
    'item_title': 'setting',
    'cache_control': 'max-age=0,must-revalidate',
    'cache_expires': 1,
    'schema': {
        'document': {
            'type': 'list',
            'input': 'multi',
            'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},
            'form_page': 1,



            'schema': {
                'type': 'dict',

                'schema': {
                    'document name': {

                        'type': 'string',
                        'input': 'text',
                        'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},
                        'form_page': 1,



                    },
                    'item title': {

                        'type': 'string',
                        'input': 'text',
                        'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},

                        'form_page': 1,


                    },
                    'cache control': {

                        'type': 'string',
                        'input': 'text',
                        'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},
                        'form_page': 1,



                    },
                    'cache expires': {

                        'type': 'number',
                        'input': 'number',
                        'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},

                        'form_page': 1,


                    },
                    'schemaa': {
                        'type': 'list',
                        'input': 'multi',
                        'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},
                        'form_page': 1,



                        'schema': {
                            'type': 'dict',
                            'schema': {
                                'node name': {
                                    'type': 'string',
                                    'input': 'text',
                                    'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},
                                    'form_page': 1,


                                },
                                'type': {
                                    'type': 'string',
                                    'input': 'select_list',
                                    'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},

                                    'allowed': ['string', 'number', 'list'],

                                },
                                'input': {
                                    'type': 'string',
                                    'input': 'combo',
                                    'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},

                                    'colections': ['settings', 'text'],
                                    'form_page': 1,

                                },
                                'create': {
                                    'type': 'boolean',
                                    'input': 'checkbox',
                                    'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},
                                    'form_page': 1,


                                },
                                'read': {
                                    'type': 'boolean',
                                    'input': 'checkbox',
                                    'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},
                                    'form_page': 1,


                                },
                                'update': {
                                    'type': 'boolean',
                                    'input': 'checkbox',
                                    'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},

                                    'form_page': 1,

                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

clienti = {
    'schema': {

        'client details': {
            'type': 'list',
            'input': 'multi',
            'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},
            'form_page': 1,

            'schema': {
                'type': 'dict',
                'schema': {
                    'name': {
                        'type': 'objectid',
                        'input': 'select_collection',
                        'icon': '',
                        'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},
                        'form_page': 1,

                        'data_relation': {
                            'resource': 'variables',
                            'field': '_id',
                            'embeddable': True
                        },

                    },
                    'value': {
                        'type': 'string',
                        'input': 'text',
                        'icon': '',
                        'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},

                        'form_page': 1,

                    }
                }
            }
        }
    }
}



variables = {
    'schema': {
        'name': {
            'type': 'string',
            'input': 'text',
            'icon': '',
            'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},
            'form_page': 1,

        },
        'used in template': {
            'type': 'boolean',
            'input': 'checkbox',
            'icon': '',
            'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},
            'form_page': 1,


        },
    }
}

select = {
    'schema': {
        'allowed': {
            'type': 'list',
            'input': 'list',
            'icon': '',
            'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},
            'form_page': 1,


        }
    }
}

proiect = {
    'schema': {
        'denumire proiect': {
            'type': 'string',
            'input': 'text',
            'icon': '',
            'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},
            'form_page': 1,


        },
        'nume persoana': {
            'type': 'string',
            'input': 'text',
            'icon': '',
            'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},
            'form_page': 1,

        },
        'functie': {
            'type': 'string',
            'input': 'text',
            'icon': '',
            'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},
            'form_page': 1,

        },
        'telefon': {
            'type': 'number',
            'input': 'tel',
            'icon': '',
            'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},
            'form_page': 1,

        },
        'email': {
            'type': 'string',
            'input': 'email',
            'icon': '',
            'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},
            'form_page': 1,

        },
        '*cnp': {
            'type': 'number',
            'input': 'number',
            'icon': '',
            'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},

        },
        '*adresa personala': {
            'type': 'string',
            'input': 'text',
            'icon': '',
            'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},
            'form_page': 1,


        }
    }
}

categorii = {
    'schema': {
        'denumire': {
            'type': 'string',
            'input': 'text',
            'icon': '',
            'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},

            'form_page': 1,

        },
    }
}

magazie = {
    'schema': {
        'categorie': {
            'type': 'objectid',
            'input': 'select_collection',
            'icon': '',
            'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},
            'form_page': 1,

            'data_relation': {
                'resource': 'variables',
                'field': '_id',
                'embeddable': True
            },

        },
        'denumire': {
            'type': 'string',
            'input': 'text',
            'icon': '',
            'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},
            'form_page': 1,


        },
        'cod': {
            'type': 'string',
            'input': 'text',
            'icon': '',
            'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},

            'form_page': 1,

        },
        'pret intrare': {
            'type': 'string',
            'input': 'text',
            'icon': '',
            'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},

            'form_page': 1,

        },
    }

}
conditii = {
    'schema': {
        'name': {
            'type': 'string',
            'input': 'text',
            'icon': '',
            'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},

            'form_page': 1,

        }
    }
}
fisa = {
    'schema': {
        'proiect': {
            'type': 'string',
            'input': 'text',
            'icon': '',
            'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},


            'form_page': 1
        },
        'nr contract': {
            'type': 'number',
            'input': 'number',
            'icon': '',
            'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},


            'form_page': 1
        },
        'pagina': {
            'type': 'number',
            'input': 'number',
            'icon': '',
            'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},


            'form_page': 1,

        },
        'antreprenor G': {
            'type': 'string',
            'input': 'text',
            'icon': '',
            'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},


            'form_page': 1,

        },
        'subantreprenor': {
            'type': 'string',
            'input': 'text',
            'icon': '',
            'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},

            'form_page': 1,
        },
        'conditii': {
            'type': 'list',
            'input': 'dual_list',
            'icon': '',
            'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},

            'form_page': 2,
            'schema': {
                'type': 'objectid',
                'data_relation': {
                    'resource': 'conditii',
                    'field': '_id',
                    'embeddable': True
                }
            },

        },
        'personal': {
            'type': 'list',
            'input': 'multi',
            'icon': '',
            'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},


            'form_page': 3,
            'schema': {
                'type': 'dict',
                'schema': {
                    'nume': {
                        'type': 'string',
                        'input': 'text',
                        'icon': '',
                        'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},


                    },
                    'ora inceput': {
                        'type': 'date',
                        'input': 'datetime',
                        'icon': '',
                        'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},


                    },
                    'ora sfarsit': {
                        'type': 'date',
                        'input': 'datetime',
                        'icon': '',
                        'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},


                    },
                }
            }
        },
        'operatiuni': {
            'type': 'list',
            'input': 'multi',
            'icon': '',
            'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},


            'form_page': 4,
            'schema': {
                'type': 'dict',
                'schema': {
                    'descriere': {
                        'type': 'string',
                        'input': 'text',
                        'icon': '',
                        'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},

                    },
                    'um': {
                        'type': 'string',
                        'input': 'text',
                        'icon': '',
                        'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},


                    },
                    'cantitate': {
                        'type': 'number',
                        'input': 'number',
                        'icon': '',
                        'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},


                    },
                }
            }
        },
        'materiale': {
            'type': 'list',
            'input': 'multi',
            'icon': '',
            'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},


            'form_page': 5,
            'schema': {
                'type': 'dict',
                'schema': {
                    'descriere': {
                        'type': 'string',
                        'input': 'text',
                        'icon': '',
                        'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},


                    },
                    'um': {
                        'type': 'string',
                        'input': 'text',
                        'icon': '',
                        'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},


                    },
                    'cantitate': {
                        'type': 'number',
                        'input': 'number',
                        'icon': '',
                        'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},

                    },
                }
            }
        },
        'echipamente': {
            'type': 'list',
            'input': 'multi',
            'icon': '',
            'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},


            'form_page': 6,
            'schema': {
                'type': 'dict',
                'schema': {
                    'descriere': {
                        'type': 'string',
                        'input': 'text',
                        'icon': '',
                        'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},


                    },
                    'total ore': {
                        'type': 'number',
                        'input': 'number',
                        'icon': '',
                        'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},


                    },
                }
            }
        },
        'nume': {
            'type': 'string',
            'input': 'text',
            'icon': '',
            'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},


            'form_page': 7,
        },
        'functie': {
            'type': 'string',
            'input': 'text',
            'icon': '',
            'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},


            'form_page': 7,
        },
        'semnatura': {
            'type': 'media',
            'input': 'sign',
            'icon': '',
            'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True},
            'form_page': 7,

        },
        'meta': {
            'title': 'Fisa Interventie',
            'pages': 7,
            'page_titles': ['Proiect', 'Conditii', 'Antreprenori la lucrarre',  'Personal la lucrarre', 'Operatiuni Executate', 'E', 'F'],
            'navigation': False
        }

    }
}

devizinterventie = {
    'schema': {
        'numar': {
            'label': 'Numar Inregistrare',
            'form_page': 1,
            'type': 'number',
            'input': 'number',
            'hint': '000',
            'show_hint': True,
            'default': 333,
            'pattern': '[0-9]',
            'fill_default': True,
            'icon': 'exposure_zero',
            'required': True,
            'minlength': 2,
            'maxlength': 3,
            'show_label': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True, 'preview': True},
            'show_icon': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True, 'preview': True},
            'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True, 'preview': True},
        },

        'data': {
            'label': 'Data',
            'form_page': 1,
            'type': 'string',
            'input': 'date',
            'title':True,
            'hint': '10/08/2020',
            'show_hint': True,
            'fill_default': True,
            'icon': 'exposure_zero',
            'required': True,
            'show_label': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True, 'preview': True},
            'show_icon': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True, 'preview': True},
            'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True, 'preview': True},
        },

        'client': {
            'label': 'Nume Client',
            'form_page': 2,
            'title':True,
            'type': 'string',
            'input': 'text',
            'hint': 'Nume Client',
            'show_hint': True,
            'default': 'Sparta Tehnic',
            'fill_default': True,
            'icon': 'exposure_zero',
            'required': True,
            'minlength': 5,
            'show_label': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True, 'preview': True},
            'show_icon': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True, 'preview': True},
            'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True, 'preview': True},
        },

        'unitate': {
            'label': 'Unitate',
            'form_page': 2,
            'type': 'string',
            'input': 'text',
            'hint': 'Unitate',
            'show_hint': True,
            'default': 'Unitate',
            'fill_default': True,
            'icon': 'exposure_zero',
            'required': True,
            'minlength': 2,
            'show_label': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True, 'preview': True},
            'show_icon': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True, 'preview': True},
            'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True, 'preview': True},
        },

        'adresa': {
            'label': 'Adresa',
            'form_page': 2,
            'type': 'string',
            'input': 'text',
            'hint': 'Tunari 28',
            'show_hint': True,
            'default': 'Str Tunari Nr 28',
            'fill_default': True,
            'icon': 'exposure_zero',
            'required': True,
            'minlength': 6,
            'show_label': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True, 'preview': True},
            'show_icon': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True, 'preview': True},
            'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True, 'preview': True},
        },

        'contact': {
            'label': 'Nr. Tel.',
            'form_page': 2,
            'type': 'number',
            'input': 'tel',
            'desc':True,
            'pattern': '[0-9]{10}',
            'hint': '0323232323',
            'show_hint': True,
            'default': 6323232323,
            'fill_default': True,
            'icon': 'exposure_zero',
            'required': True,
            'show_label': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True, 'preview': True},
            'show_icon': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True, 'preview': True},
            'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True, 'preview': True},
        },

        'persoana contact': {

            'label': 'Persoana Contact',
            'form_page': 2,
            'type': 'string',
            'input': 'text',
            'hint': 'Nume contact',
            'show_hint': True,
            'default': 'Vlad Iancu',
            'fill_default': True,
            'desc':True,
            'icon': 'exposure_zero',
            'required': True,
            'minlength': 6,
            'show_label': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True, 'preview': True},
            'show_icon': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True, 'preview': True},
            'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True, 'preview': True},
        },

        'specialisti service': {
            'label': 'Specialisti',
            'form_page': 3,
            'type': 'list',
            'input': 'list',
            'hint': 'Specialisti',
            'show_hint': True,
            'default': ['Dorel', 'Alt Dorel'],
            'fill_default': True,
            'icon': 'exposure_zero',
            'required': True,
            'after':{'create':'</br>'},
            'show_after':{'create':True},
            'show_label': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True, 'preview': True},
            'show_icon': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True, 'preview': True},
            'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True, 'preview': True},
        },

        'data interventie': {
            'label': 'Data Interventiei',
            'form_page': 3,
            'type': 'string',
            'input': 'date',
            'hint': '10/08/2020',
            'show_hint': True,
            'fill_default': True,
            'icon': 'exposure_zero',
            'required': True,
            'show_label': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True, 'preview': True},
            'show_icon': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True, 'preview': True},
            'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True, 'preview': True},
        },

        'ora sosirii': {
            'label': 'Ora Sosirii',
            'form_page': 3,
            'type': 'string',
            'input': 'time',
            'hint': '10:00',
            'show_hint': True,
            'fill_default': True,
            'icon': 'time',
            'required': True,
            'show_label': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True, 'preview': True},
            'show_icon': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True, 'preview': True},
            'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True, 'preview': True},
        },

        'ora plecarii': {
            'label': 'Ora plecarii',
            'form_page': 3,
            'type': 'string',
            'input': 'time',
            'hint': '10:00',
            'show_hint': True,
            'fill_default': True,
            'icon': 'time',
            'required': True,
            'show_label': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True, 'preview': True},
            'show_icon': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True, 'preview': True},
            'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True, 'preview': True},
        },

        'nr km': {
            'label': 'Nr. Km.',
            'form_page': 3,
            'type': 'number',
            'input': 'number',
            'pattern': '[0-9]{3}',
            'hint': '100',
            'show_hint': True,
            'default': '100',
            'fill_default': True,
            'icon': 'exposure_zero',
            'required': True,
            'pre':{'create':'</br>'},
            'show_pre':{'create':True},
            'show_label': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True, 'preview': True},
            'show_icon': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True, 'preview': True},
            'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True, 'preview': True},

        },
        'garantie': {
            'label': 'Garantie',
            'form_page': 3,
            'type': 'boolean',
            'input': 'checkbox',
            'hint': 'E in garantie?',
            'show_hint': True,
            'default': False,
            'fill_default': True,
            'label_true': 'DA',
            'label_false': 'NU',
            'icon': 'exposure_zero',
            'pre':{'create':'</br>'},
            'show_pre':{'create':True},
            'show_label': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True, 'preview': True},
            'show_icon': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True, 'preview': True},
            'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True, 'preview': True},
        },

        'urgenta': {
            'label': 'Uregenta',
            'form_page': 3,
            'type': 'boolean',
            'input': 'checkbox',
            'hint': 'Este urgenta?',
            'show_hint': True,
            'default': False,
            'fill_default': True,
            'label_true': 'DA',
            'label_false': 'NU',
            'icon': 'exposure_zero',
            'show_label': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True, 'preview': True},
            'show_icon': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True, 'preview': True},
            'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True, 'preview': True},
        },

        'defect raportat': {
            'label': 'Defect Raportat - detaliu',
            'form_page': 4,
            'type': 'string',
            'input': 'richtext',
            'hint': 'Situatie defecte',
            'show_hint': True,
            'fill_default': True,
            'icon': 'exposure_zero',
            'required': True,
            'minlength': 6,
            'show_label': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True, 'preview': True},
            'show_icon': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True, 'preview': True},
            'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True, 'preview': True},
        },

        'defect constatat': {
            'label': 'Defect constatat - detaliu',
            'form_page': 4,
            'type': 'string',
            'input': 'richtext',
            'hint': 'Situatie defecte',
            'show_hint': True,
            'fill_default': True,
            'icon': 'exposure_zero',
            'required': True,
            'minlength': 6,
            'show_label': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True, 'preview': True},
            'show_icon': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True, 'preview': True},
            'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True, 'preview': True},
        },

        'interventie': {
            'label': 'Modalitate interventie',
            'form_page': 4,
            'type': 'string',
            'input': 'richtext',
            'hint': 'Operatiuni interventie',
            'show_hint': True,
            'fill_default': True,
            'icon': 'exposure_zero',
            'required': True,
            'minlength': 6,
            'show_label': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True, 'preview': True},
            'show_icon': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True, 'preview': True},
            'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True, 'preview': True},
        },


        'materiale si echipamente': {
            'label': 'Materiale si Echipamente folosite',
            'form_page': 5,
            'type': 'list',
            'input': 'multi',
            'icon': 'exposure_zero',
            'required': True,
            'show_label': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True, 'preview': True},
            'show_icon': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True, 'preview': True},
            'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True, 'preview': True},

            'schema': {
                'type': 'dict',
                'schema': {
                    'echipamente': {
                        'label': 'Echipamente folosite',
                        'form_page': 5,
                        'type': 'string',
                        'input': 'text',
                        'hint': 'Echipament folosit',
                        'default': 'electromotostivuitor',
                        'show_hint': True,
                        'fill_default': True,
                        'icon': 'exposure_zero',
                        'required': True,
                        'minlength': 6,
                        'show_label': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True, 'preview': True},
                        'show_icon': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True, 'preview': True},
                        'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True, 'preview': True},
                    },

                    'cantitate': {
                        'label': 'Cantitate',
                        'form_page': 5,
                        'type': 'number',
                        'input': 'number',
                        'hint': 'Cantitate',
                        'default': 1,
                        'show_hint': True,
                        'fill_default': True,
                        'icon': 'exposure_zero',
                        'required': True,
                        'minlength': 6,
                        'show_label': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True, 'preview': True},
                        'show_icon': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True, 'preview': True},
                        'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True, 'preview': True},
                    },
                },
            },
        },

        'manopera': {
            'label': 'Manopera',
            'form_page': 6,
            'type': 'list',
            'input': 'multi',
            'icon': 'exposure_zero',
            'required': True,
            'show_label': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True, 'preview': True},
            'show_icon': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True, 'preview': True},
            'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True, 'preview': True},

            'schema': {
                'type': 'dict',
                'schema': {
                    'specialist': {
                        'label': 'Specialist',
                        'form_page': 6,
                        'type': 'string',
                        'input': 'text',
                        'hint': 'Executant',
                        'default': 'Dorel',
                        'show_hint': True,
                        'fill_default': True,
                        'icon': 'exposure_zero',
                        'required': True,
                        'minlength': 6,
                        'show_label': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True, 'preview': True},
                        'show_icon': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True, 'preview': True},
                        'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True, 'preview': True},
                    },
                    'nr ore': {
                        'label': 'Nr Ore',
                        'form_page': 6,
                        'type': 'number',
                        'input': 'number',
                        'hint': 'Ore prestate',
                        'default': 1,
                        'show_hint': True,
                        'fill_default': True,
                        'icon': 'exposure_zero',
                        'required': True,
                        'minlength': 6,
                        'show_label': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True, 'preview': True},
                        'show_icon': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True, 'preview': True},
                        'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True, 'preview': True},
                    },
                },
            },
        },

        'observatii': {
            'label': 'Observatii',
            'form_page': 7,
            'type': 'string',
            'input': 'richtext',
            'hint': 'Intamplari hazlii la locul de munca',
            'show_hint': True,
            'default': '<p><strong>merge</strong></p>',
            'fill_default': True,
            'icon': 'exposure_zero',
            'required': True,
            'minlength': 6,
            'show_label': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True, 'preview': True},
            'show_icon': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True, 'preview': True},
            'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True, 'preview': True},
        },

        'nume': {
            'label': 'Nume si Prenume',
            'form_page': 8,
            'type': 'string',
            'input': 'text',
            'hint': 'Intamplari hazlii la locul de munca',
            'default': 'Dorel 3',
            'show_hint': True,
            'fill_default': True,
            'icon': 'exposure_zero',
            'icon': '',
            'required': True,
            'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True, 'preview': True},
            'show_label': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True, 'preview': True},
            'show_icon': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True, 'preview': True},



        },

        'semnatura': {
            'form_page': 8,
            'type': 'string',
            'input': 'sign',
            'icon': '',
            'display': {'create': True, 'read': True, 'update': True, 'details': True, 'delete': True, 'preview': True},
            'required': True,

        },
        'meta': {
            'title': 'Deviz Interventie',
            'pages': 8,
            'page_titles': ['Deviz', 'Client', 'Lucrare', 'Defecte si Interventii', 'Materiale si echipamente', 'Manopera', 'Observatii', 'Confirmare Beneficiar'],
            'input': 'meta',
            'save_type': 'signature',
            'navigation': True,
            'show_titles': True,
            'default_template': 'f1'
        }
    }
}

DOMAIN = {
    'dogs': dogs,
    'dogBreeds': dogBreeds,
    'colors': colors,
    'ceva': ceva,
    'settings': settings,
    'select': select,
    'clienti': clienti,
    'variables': variables,
    'proiect': proiect,
    'categorii': categorii,
    'magazie': magazie,
    'fisa': fisa,
    'conditii': conditii,
    'devizinterventie': devizinterventie
}
