package entity

import "gorm.io/gorm"

type Creator struct {
	gorm.Model
	Username	string	`gorm:"uniqueIndex"`
	Password	string
	Email		string	`gorm:"uniqueIndex"`


	Cartoons	[]Cartoon	`gorm:"foreignKey:CreatorID"`
}