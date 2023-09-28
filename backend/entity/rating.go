package entity

import "gorm.io/gorm"

type Rating struct {
	gorm.Model
	Status 	bool


	MemberID	*uint
	Member		Member 		`gorm:"foreignKey:MemberID"`

	CartoonID	*uint
	Cartoon		Cartoon		`gorm:"foreignKey:CartoonID"`
}