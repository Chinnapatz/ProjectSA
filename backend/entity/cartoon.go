package entity

import (
	"time"
	"gorm.io/gorm"
)

type Cartoon struct {
	gorm.Model
	Title				string
	Catagories			string
	Summary				string
	Square_Thumbnail	[]uint8
	Vertical_Thumbnail	[]uint8
	Datetime			time.Time

}