package entity

import (
	"time"

	"gorm.io/gorm"
)

type History struct {
	gorm.Model
	Datetime	time.Time
	Ep_number	int
}