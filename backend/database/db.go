package database

import (
	"log"

	"github.com/adrielldev/done-angular-go/models"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var (
	DB  *gorm.DB
	err error
)

func ConnectDB() {
	connString := "host=localhost user=postgres password=123 dbname=done"
	DB, err := gorm.Open(postgres.Open(connString))
	if err != nil {
		log.Panic("Erro ao conectar com banco de dados")
	}
	DB.AutoMigrate(&models.Task{})

}
