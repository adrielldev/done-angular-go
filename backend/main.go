package main

import (
	"github.com/adrielldev/done-angular-go/database"
	"github.com/adrielldev/done-angular-go/routes"
)

func main() {
	database.ConnectDB()
	routes.HandleRequests()
	return
}
