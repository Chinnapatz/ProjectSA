package entity

import (
	"time"
	"gorm.io/gorm"
)

type Cartoon struct {
	gorm.Model
	Title				string	`gorm:"uniqueIndex"`
	Catagories			string
	Summary				string
	Square_Thumbnail	string
	Vertical_Thumbnail	string
	Datetime			time.Time


	Episodess	[]Episodes	`gorm:"foreignKey:CartoonID"`
	Historys	[]History	`gorm:"foreignKey:CartoonID"`
	Ratings		[]Rating	`gorm:"foreignKey:CartoonID"`
	
	CategoriesID	*uint
	Categories		Categories		`gorm:"foreignKey:CategoriesID"`
}