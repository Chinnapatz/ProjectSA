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
	Square_Thumbnail	[]uint8
	Vertical_Thumbnail	[]uint8
	Datetime			time.Time


	Episodess	[]Episodes	`gorm:"foreignKey:CartoonID"`
	Historys	[]History	`gorm:"foreignKey:CartoonID"`
	Ratings		[]Rating	`gorm:"foreignKey:CartoonID"`
	
	CreatorID	*uint
	Creator		Creator		`gorm:"foreignKey:CreatorID"`
}