package entity

import "gorm.io/gorm"

type Rating struct {
	gorm.Model
	Status 	bool
}