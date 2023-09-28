package entity

import (
	"time"

	"gorm.io/gorm"
)

type PaymentEpisode struct {
	gorm.Model
	Datetime	time.Time
	
}