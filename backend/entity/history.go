package entity

import (
	"time"

	"gorm.io/gorm"
)

type History struct {
	gorm.Model
	Datetime	time.Time
	Ep_number	int


	EpisodesID	*uint
	Episodes	Episodes `gorm:"foreignKey:EpisodesID"`

	CartoonID	*uint
	Cartoon		Cartoon		`gorm:"foreignKey:CartoonID"`

	MemberID	*uint
	Member	Member `gorm:"foreignKey:MemberID"`

}