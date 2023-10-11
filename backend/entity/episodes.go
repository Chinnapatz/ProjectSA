package entity

import (
"gorm.io/gorm"
)

type Episodes struct {
	gorm.Model
	Title		string		`gorm:"uniqueIndex"`
	Pictures	string		
	Thumbnail  	string
	Status		bool
	Epnumber	int	 		`gorm:"uniqueIndex"`
	Price		int



	PaymentEpisodes	[]PaymentEpisode `gorm:"foreignKey:EpisodesID"`
	Comments		[]Comment	`gorm:"foreignKey:EpisodesID"`
	Historys		[]History	`gorm:"foreignKey:EpisodesID"`

	CartoonID	*uint
	Cartoon		Cartoon		`gorm:"foreignKey:CartoonID"`
}