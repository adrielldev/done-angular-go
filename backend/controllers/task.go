package controllers

import (
	"net/http"

	"github.com/adrielldev/done-angular-go/database"
	"github.com/adrielldev/done-angular-go/models"
	"github.com/gin-gonic/gin"
)

func GetAllTasks(c *gin.Context) {
	var alunos []models.Task
	database.DB.Find(&alunos)
	c.JSON(200, alunos)
}

func CreateTask(c *gin.Context) {
	var task models.Task
	if err := c.ShouldBindJSON(&task); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": err.Error()})
		return

	}
	database.DB.Create(&task)
	c.JSON(http.StatusCreated, task)
}

func GetTaskById(c *gin.Context) {
	var task models.Task
	id := c.Params.ByName("id")
	database.DB.First(&task, id)

	if task.ID == 0 {
		c.JSON(http.StatusNotFound, gin.H{
			"message": "Task não encontrada",
		})
		return
	}

	c.JSON(http.StatusOK, task)

}

func DeleteTask(c *gin.Context) {
	id := c.Params.ByName("id")
	var task models.Task
	database.DB.Delete(&task, id)

	c.JSON(http.StatusOK, gin.H{
		"message": "Task deletada com sucesso",
	})

}

func EditTask(c *gin.Context) {
	var task models.Task
	id := c.Params.ByName("id")
	database.DB.First(&task, id)
	if err := c.ShouldBindJSON(&task); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": err.Error()})
		return
	}

	database.DB.Model(&task).UpdateColumns(task)
	c.JSON(http.StatusOK, task)

}
