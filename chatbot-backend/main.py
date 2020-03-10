import controller.handler as handler_object
import route.routes as api_router

if __name__ == "__main__":

    controller = handler_object.Handler()
    router = api_router.RouteCreator(controller)
    router.create_route_action()
