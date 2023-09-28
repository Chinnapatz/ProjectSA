package entity

import "gorm.io/gorm"

type Episodes struct {
	gorm.Model
	Title		string		`gorm:"uniqueIndex"`
	Picture		[]uint8
	Status		bool
	Ep_number	int	 
	Price		int



	PaymentEpisodes	[]PaymentEpisode `gorm:"foreignKey:EpisodesID"`
	Comments		[]Comment	`gorm:"foreignKey:EpisodesID"`
	Historys		[]History	`gorm:"foreignKey:EpisodesID"`

	CartoonID	*uint
	Cartoon		Cartoon		`gorm:"foreignKey:CartoonID"`
}