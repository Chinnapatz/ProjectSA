package entity

import "gorm.io/gorm"

type Follow struct {
	gorm.Model
	MemberID  uint
	CartoonID uint
	Cartoon   Cartoon `gorm:"foreignKey:CartoonID"`
}
