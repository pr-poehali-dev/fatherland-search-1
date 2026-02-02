import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

function Index() {
  const [activeSection, setActiveSection] = useState('home');
  const [activeTab, setActiveTab] = useState('expeditions');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    { id: 1, title: 'Экспедиция Рогачевский район', location: 'Гомельская область' },
    { id: 2, title: 'Находка медальонов', location: 'Мостовский район' },
    { id: 3, title: 'Работа поисковой группы', location: 'Беларусь' },
    { id: 4, title: 'Идентификация останков', location: 'Полевой лагерь' },
    { id: 5, title: 'Смертный медальон', location: 'Архив находок' },
    { id: 6, title: 'Командная работа', location: 'Экспедиция 2025' }
  ];

  const expeditionLocations = [
    { name: 'Рогачевский район', coords: '53.0906, 30.0497', date: '25-26.10.2025', found: 4 },
    { name: 'Мостовский район', coords: '53.4000, 24.5333', date: '11-12.10.2025', found: 14 }
  ];

  const findings = [
    {
      id: 1,
      date: '25-26.10.2025',
      location: 'Рогачевский район, Гомельская область',
      found: 4,
      identified: 0,
      description: 'Обнаружены останки 4 бойцов и командиров Красной Армии погибших в июле-августе 1941 года.',
      status: 'В работе'
    },
    {
      id: 2,
      date: '11-12.10.2025',
      location: 'Мостовский район, Гродненская область',
      found: 14,
      identified: 2,
      description: 'Обнаружены останки 14 бойцов погибших 29-30 июня 1941 года. Найдено 7 смертных медальонов.',
      status: 'Частично установлены'
    }
  ];

  const identified = [
    {
      name: 'Денисюк Григорий Алексеевич',
      rank: 'Красноармеец',
      birth: '1920 г.р.',
      origin: 'УССР, Одесская область, Гайворенский район, д. Юльянивка',
      family: 'Денисюк Алексей Василевич',
      expedition: 'Мостовский район, 11-12.10.2025'
    },
    {
      name: 'Горохов Константин Тимо...',
      rank: 'Красноармеец',
      birth: '1918 г.р.',
      origin: 'Уз.ССР, г. Ташкент, Куйбышевский район, ул. Саперная, д. 50',
      family: 'Гороховой Прасковье Ники...',
      expedition: 'Мостовский район, 11-12.10.2025',
      note: 'Мобилизован Лененским РВК'
    }
  ];

  const partners = [
    { name: '52 оспб ВС РБ', type: 'Военное подразделение' },
    { name: 'Поисковая группа "Звезда"', location: 'г. Рогачев и Жлобин' },
    { name: 'Институт пограничной службы "16 Дзержинский"', location: 'г. Минск' },
    { name: '"Обелиск 92/1"', location: 'г. Бобруйск' },
    { name: '"Днепровский рубеж"', location: 'г. Жлобин' },
    { name: 'Поисковое объединение "Отечество"', location: 'Республика Татарстан' },
    { name: 'Союз поисковых отрядов Архангельской области им. В.А. Кычева', location: 'Архангельск' },
    { name: 'Поисковый отряд "ТриПять"', location: 'Вологодская область' },
    { name: 'Объединение "Долг"', location: 'Удмуртия' },
    { name: 'Поисковый отряд "Гранит"', location: 'г. Вышний Волочек' },
    { name: '"Военная археология"', location: 'г. Москва' },
    { name: '"Подвиг Урала"', location: 'г. Екатеринбург' }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon name="Users" size={24} className="text-primary" />
              </div>
              <div>
                <h1 className="text-xl font-bold">Батьковщина</h1>
                <p className="text-xs text-muted-foreground">Поисковая группа</p>
              </div>
            </div>
            <nav className="hidden md:flex gap-6">
              {['home', 'about', 'findings', 'gallery', 'map', 'partners', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'about' && 'О группе'}
                  {section === 'findings' && 'Находки'}
                  {section === 'gallery' && 'Галерея'}
                  {section === 'map' && 'Карта'}
                  {section === 'partners' && 'Партнёры'}
                  {section === 'contacts' && 'Контакты'}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <Badge className="mb-4" variant="outline">
              <Icon name="MapPin" size={14} className="mr-1" />
              Беларусь
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Сохраняем память о защитниках Отечества
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Поисковая группа «Батьковщина» проводит работы по обнаружению и идентификации останков бойцов и командиров Красной Армии, погибших в 1941 году
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="gap-2">
                <Icon name="Search" size={20} />
                База находок
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="text-center hover-scale">
              <CardHeader>
                <div className="mx-auto h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <Icon name="Users" size={24} className="text-primary" />
                </div>
                <CardTitle className="text-3xl">1000+</CardTitle>
                <CardDescription>Бойцов найдено</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center hover-scale">
              <CardHeader>
                <div className="mx-auto h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <Icon name="UserCheck" size={24} className="text-primary" />
                </div>
                <CardTitle className="text-3xl">1000</CardTitle>
                <CardDescription>Личностей установлено</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center hover-scale">
              <CardHeader>
                <div className="mx-auto h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <Icon name="FileText" size={24} className="text-primary" />
                </div>
                <CardTitle className="text-3xl">100+</CardTitle>
                <CardDescription>Медальонов найдено</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center hover-scale">
              <CardHeader>
                <div className="mx-auto h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <Icon name="Calendar" size={24} className="text-primary" />
                </div>
                <CardTitle className="text-3xl">14</CardTitle>
                <CardDescription>Экспедиции в 2025</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Findings Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Последние находки</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Результаты поисковых работ и идентифицированные бойцы
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="flex gap-2 mb-6 border-b">
              <button
                onClick={() => setActiveTab('expeditions')}
                className={`px-4 py-2 font-medium transition-colors border-b-2 -mb-px ${
                  activeTab === 'expeditions'
                    ? 'border-primary text-primary'
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                Экспедиции
              </button>
              <button
                onClick={() => setActiveTab('identified')}
                className={`px-4 py-2 font-medium transition-colors border-b-2 -mb-px ${
                  activeTab === 'identified'
                    ? 'border-primary text-primary'
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                Установленные личности
              </button>
            </div>

            {activeTab === 'expeditions' && (
              <div className="space-y-4">
                {findings.map((finding) => (
                <Card key={finding.id} className="hover-scale">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="flex items-center gap-2 mb-2">
                          <Icon name="MapPin" size={20} className="text-primary" />
                          {finding.location}
                        </CardTitle>
                        <CardDescription className="flex items-center gap-2">
                          <Icon name="Calendar" size={16} />
                          {finding.date}
                        </CardDescription>
                      </div>
                      <Badge variant={finding.identified > 0 ? 'default' : 'secondary'}>
                        {finding.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{finding.description}</p>
                    <div className="flex gap-6 text-sm">
                      <div className="flex items-center gap-2">
                        <Icon name="Users" size={16} className="text-primary" />
                        <span><strong>{finding.found}</strong> бойцов найдено</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="UserCheck" size={16} className="text-primary" />
                        <span><strong>{finding.identified}</strong> личностей установлено</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              </div>
            )}

            {activeTab === 'identified' && (
              <div className="space-y-4">
                {identified.map((person, index) => (
                <Card key={index} className="hover-scale">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-2xl mb-2">{person.name}</CardTitle>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline">{person.rank}</Badge>
                          <Badge variant="outline">{person.birth}</Badge>
                        </div>
                      </div>
                      <Icon name="Award" size={32} className="text-primary" />
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex gap-2">
                      <Icon name="Home" size={18} className="text-muted-foreground mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium">Место рождения:</p>
                        <p className="text-sm text-muted-foreground">{person.origin}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Icon name="Users" size={18} className="text-muted-foreground mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium">Адрес семьи:</p>
                        <p className="text-sm text-muted-foreground">{person.family}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Icon name="MapPin" size={18} className="text-muted-foreground mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium">Найден в экспедиции:</p>
                        <p className="text-sm text-muted-foreground">{person.expedition}</p>
                      </div>
                    </div>
                    {person.note && (
                      <div className="flex gap-2 pt-2 border-t">
                        <Icon name="Info" size={18} className="text-primary mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-muted-foreground">{person.note}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">О поисковой группе</h2>
            </div>
            <Card>
              <CardContent className="pt-6 space-y-6">
                <div className="flex gap-4">
                  <Icon name="Target" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Наша миссия</h3>
                    <p className="text-muted-foreground">
                      Поисковая группа «Батьковщина» проводит систематические работы по поиску, эксгумации и идентификации останков защитников Отечества, погибших в годы Великой Отечественной войны на территории Беларуси.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Icon name="Handshake" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Совместная работа</h3>
                    <p className="text-muted-foreground">
                      Мы работаем в тесном сотрудничестве с военными подразделениями Вооружённых Сил Республики Беларусь, а также с поисковыми объединениями из России и Беларуси.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Icon name="Heart" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Память поколений</h3>
                    <p className="text-muted-foreground">
                      Каждая найденная личность — это возможность для семей узнать судьбу своих родных и достойно почтить их память. Работа с медальонами позволяет восстанавливать имена героев.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши партнёры</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Мы работаем вместе с военными подразделениями и поисковыми группами
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {partners.map((partner, index) => (
              <Card key={index} className="hover-scale">
                <CardContent className="pt-6">
                  <div className="flex gap-3">
                    <Icon name="Shield" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium mb-1">{partner.name}</p>
                      {partner.location && (
                        <p className="text-sm text-muted-foreground">{partner.location}</p>
                      )}
                      {partner.type && (
                        <Badge variant="secondary" className="mt-2 text-xs">{partner.type}</Badge>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Галерея</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Фотографии с поисковых экспедиций
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {galleryImages.map((image) => (
              <Card key={image.id} className="hover-scale cursor-pointer overflow-hidden" onClick={() => setSelectedImage(image.id)}>
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                  <Icon name="Image" size={48} className="text-primary/30" />
                </div>
                <CardContent className="pt-4">
                  <h3 className="font-semibold mb-1">{image.title}</h3>
                  <p className="text-sm text-muted-foreground flex items-center gap-1">
                    <Icon name="MapPin" size={14} />
                    {image.location}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Карта экспедиций</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Места проведения поисковых работ
            </p>
          </div>
          <div className="max-w-6xl mx-auto">
            <Card>
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-primary/5 to-muted flex items-center justify-center relative overflow-hidden">
                  <Icon name="Map" size={64} className="text-primary/20 absolute" />
                  <div className="relative z-10 text-center p-8">
                    <Icon name="MapPin" size={48} className="text-primary mx-auto mb-4" />
                    <p className="text-lg font-medium mb-2">Интерактивная карта</p>
                    <p className="text-sm text-muted-foreground">Места проведения экспедиций на территории Беларуси</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              {expeditionLocations.map((location, index) => (
                <Card key={index} className="hover-scale">
                  <CardContent className="pt-6">
                    <div className="flex gap-3">
                      <Icon name="MapPin" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium mb-1">{location.name}</p>
                        <p className="text-sm text-muted-foreground mb-2">{location.date}</p>
                        <Badge variant="outline" className="text-xs">
                          {location.found} бойцов найдено
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-center justify-center">
                  <Icon name="Mail" size={24} />
                  Контакты
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-3">
                  <Icon name="MapPin" size={20} className="text-primary flex-shrink-0" />
                  <p className="text-muted-foreground">г. Минск, Беларусь</p>
                </div>
                <div className="flex gap-3">
                  <Icon name="Mail" size={20} className="text-primary flex-shrink-0" />
                  <p className="text-muted-foreground">info@batkovschina.by</p>
                </div>
                <div className="flex gap-3">
                  <Icon name="Phone" size={20} className="text-primary flex-shrink-0" />
                  <p className="text-muted-foreground">+375 (XX) XXX-XX-XX</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center text-sm text-muted-foreground">
            <p className="mb-2">© 2025 Поисковая группа «Батьковщина»</p>
            <p>Сохраняем память о защитниках Отечества</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Index;