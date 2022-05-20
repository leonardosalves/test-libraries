import { UsersController } from "./controller/UsersController"
import { CongregacoesController } from "./controller/CongregacoesController"
import { PaisesController } from "./controller/PaisesController"

export const Routes = [{
    method: "get",
    route: "/users",
    controller: UsersController,
    action: "all"
}, {
    method: "get",
    route: "/users/:id",
    controller: UsersController,
    action: "one"
}, {
    method: "post",
    route: "/users",
    controller: UsersController,
    action: "save"
}, {
    method: "delete",
    route: "/users/:id",
    controller: UsersController,
    action: "remove"
},{
    method: "get",
    route: "/congregacoes",
    controller: CongregacoesController,
    action: "all"
}, {
    method: "get",
    route: "/congregacoes/:id",
    controller: CongregacoesController,
    action: "one"
}, {
    method: "post",
    route: "/congregacoes",
    controller: CongregacoesController,
    action: "save"
}, {
    method: "delete",
    route: "/congregacoes/:id",
    controller: CongregacoesController,
    action: "remove"
},{
    method: "get",
    route: "/paises",
    controller: PaisesController,
    action: "all"
}, {
    method: "get",
    route: "/paises/:id",
    controller: PaisesController,
    action: "one"
}, {
    method: "post",
    route: "/paises",
    controller: PaisesController,
    action: "save"
}, {
    method: "delete",
    route: "/paises/:id",
    controller: PaisesController,
    action: "remove"
}]