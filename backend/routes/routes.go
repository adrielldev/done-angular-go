package routes

import (
	"github.com/adrielldev/done-angular-go/controllers"
	"github.com/adrielldev/done-angular-go/middlewares"
	"github.com/gin-gonic/gin"
)

func HandleRequests() {
	r := gin.Default()
	r.Use(middlewares.CORSMiddleware())
	r.GET("/tasks", controllers.GetAllTasks)
	r.POST("/tasks", controllers.CreateTask)
	r.GET("/tasks/:id", controllers.GetTaskById)
	r.PATCH("/tasks/:id", controllers.EditTask)
	r.DELETE("/tasks/:id", controllers.DeleteTask)
	r.Run("127.0.0.1:8080")
}
