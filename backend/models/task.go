package models

import (
	"gorm.io/gorm"
)

type Task struct {
	gorm.Model
	Id   string `json:"id"`
	Name string `json:"name"`
	Done bool   `json:"done"`
}
