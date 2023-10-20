package entity

import (
	"gorm.io/gorm"
)

type History struct {
	gorm.Model

	EpisodesID	*uint
	Episodes	Episodes `gorm:"foreignKey:EpisodesID"`

	CartoonID	*uint
	Cartoon		Cartoon		`gorm:"foreignKey:CartoonID"`

	MemberID	*uint
	Member	Member `gorm:"foreignKey:MemberID"`

}