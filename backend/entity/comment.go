package entity

import (
	"time"

	"gorm.io/gorm"
)

type Comment struct {
	gorm.Model
	message		string
	datetime	time.Time


	MemberID	*uint
	Member	Member `gorm:"foreignKey:MemberID"`

	EpisodesID	*uint
	Episodes	Episodes `gorm:"foreignKey:EpisodesID"`
}