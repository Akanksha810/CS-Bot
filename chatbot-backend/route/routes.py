from .route_wrapper import Route, RouteAffix


class RouteCreator:
    def __init__(self, controller):
        self.controller = controller

    def create_route_action(self):
        routes = [Route(endpoint='/', endpoint_name='home', handler=self.controller.handler1),
                  Route(endpoint='/endpoint1', endpoint_name='endpoint1', handler=self.controller.handler2),
                  Route(endpoint='/endpoint2', endpoint_name='endpoint2', handler=self.controller.handler3),
                  Route(endpoint='/endpoint3', endpoint_name='endpoint3', handler=self.controller.handler4),
                  ]
        route_adder = RouteAffix()
        for route in routes:
            route_adder.action(route)
