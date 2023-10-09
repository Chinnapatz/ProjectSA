package entity

import "gorm.io/gorm"

type Follow struct {
	gorm.Model


	MemberID	*uint
	Member		Member 		`gorm:"foreignKey:MemberID"`

	CartoonID	*uint
	Cartoon		Cartoon		`gorm:"foreignKey:CartoonID"`
}