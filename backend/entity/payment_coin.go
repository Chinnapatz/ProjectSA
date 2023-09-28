package entity

import (
	"time"

	"gorm.io/gorm"
)

type PaymentCoin struct {
	gorm.Model
	Datetime	time.Time


}