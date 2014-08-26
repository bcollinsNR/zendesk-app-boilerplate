(function() {
    return { 
        events: {
            'app.activated': 'initialize'
        },
        requests: {
            exampleFunction: function(variable) {
                return {
                    type: 'GET',
                    url: "https://foo.bar?var=" + variable,
                    contentType: "application/json; charset=utf-8"
                };
            }
        },
        initialize: function(data) { 
            if (data.firstLoad) {
                this.ajax('exampleFunction', var bar)
                    .done(function(data) {
                        this.switchTo('list', {
                            status: data.something
                        });
                    });
            }
        }
    };
}());