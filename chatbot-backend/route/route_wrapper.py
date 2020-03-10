from flask import Flask, Response


class Route:
    def __init__(self, endpoint, endpoint_name, handler):
        self.endpoint = None
        self.endpoint_name = None
        self.handler = None


# OK
class EndpointAction(object):

    def __init__(self, action):
        self.action = action
        self.response = Response(status=200, headers={})

    def __call__(self, *args):
        self.action()
        return self.response


class FlaskAppWrapper(object):
    app = None

    def __init__(self, name):
        self.app = Flask(name)

    def run(self):
        self.app.run()

    def add_endpoint(self, endpoint=None, endpoint_name=None, handler=None):
        self.app.add_url_rule(endpoint, endpoint_name, EndpointAction(handler))


class RouteAffix:
    def __init__(self, controller=None):
        self.controller = controller

    def action(self, route):
        print("action.... working")
        a = FlaskAppWrapper('wrap')
        a.add_endpoint(endpoint=route.endpoint,
                       endpoint_name=route.endpoint_name,
                       handler=route.handler)
        a.run()
