package entity
import (
	"time"
	"gorm.io/gorm"
)
type PaymentEpisode struct {
	gorm.Model
	Datetime	time.Time
	EpisodesID	*uint
	Episodes	Episodes `gorm:"foreignKey:EpisodesID"`

	MemberID	*uint
	Member	Member `gorm:"foreignKey:MemberID"`
}